// controllers/authController.js
require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Otp = require('../models/Otp');
const { genOtp, hashOtp, getExpiryDate } = require('../utils/otp');
const { sendOtpEmail } = require('../services/email');
const { sendOtpSms } = require('../services/sms');
const { verifyGoogleIdToken } = require('../services/googleVerify'); // we'll add next
const { signAccessToken, signRefreshToken } = require('../utils/jwt');

const SALT_ROUNDS = 10;

// Helper: create tokens
function tokensForUser(user) {
  const payload = { sub: user._id.toString(), email: user.email || null };
  return { accessToken: signAccessToken(payload), refreshToken: signRefreshToken(payload) };
}

// Registration (email + phone optional)
async function register(req, res) {
  try {
    const { name, email, phone, password, requirePhoneVerification } = req.body;
    if (!password || (!email && !phone)) return res.status(400).json({ error: 'email or phone and password required' });

    const existing = await User.findOne({ $or: [{ email }, { phone }] });
    if (existing) return res.status(400).json({ error: 'User already exists' });

    const passwordHash = await bcrypt.hash(password, SALT_ROUNDS);
    const user = new User({
      name,
      email,
      phone,
      passwordHash,
      emailVerified: false,
      phoneVerified: false,
      loginMethods: ['local']
    });
    await user.save();

    // Optionally send OTP to verify phone immediately
    if (phone && requirePhoneVerification) {
      const otp = genOtp();
      await Otp.create({ subject: phone, otpHash: hashOtp(otp), purpose: 'verify_phone', expiresAt: getExpiryDate() });
      await sendOtpSms(phone, otp);
      return res.status(201).json({ ok: true, message: 'User created. OTP sent to phone for verification.' });
    }

    return res.status(201).json({ ok: true, message: 'User created' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'server_error' });
  }
}

// Login with email or phone + password
async function login(req, res) {
  try {
    const { login, password } = req.body; // login can be email or phone
    if (!login || !password) return res.status(400).json({ error: 'login and password required' });

    const query = login.includes('@') ? { email: login } : { phone: login };
    const user = await User.findOne(query);
    if (!user || !user.passwordHash) return res.status(400).json({ error: 'invalid credentials' });

    const match = await bcrypt.compare(password, user.passwordHash);
    if (!match) return res.status(400).json({ error: 'invalid credentials' });

    user.lastLoginAt = new Date();
    await user.save();

    const tokens = tokensForUser(user);
    return res.json({ ok: true, user: { id: user._id, name: user.name, email: user.email, phone: user.phone }, tokens });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'server_error' });
  }
}

// Send OTP for forgot password or phone verification
async function sendOtp(req, res) {
  try {
    const { subject, purpose = 'password_reset' } = req.body; // subject = email or phone
    if (!subject) return res.status(400).json({ error: 'subject required' });

    const isEmail = subject.includes('@');
    // To avoid enumeration, we respond OK even if user doesn't exist; we only send if user exists
    const user = isEmail ? await User.findOne({ email: subject }) : await User.findOne({ phone: subject });
    if (!user) return res.json({ ok: true }); // silent success

    const otp = genOtp();
    await Otp.create({ subject, otpHash: hashOtp(otp), purpose, expiresAt: getExpiryDate() });

    if (isEmail) await sendOtpEmail(subject, otp, purpose);
    else await sendOtpSms(subject, otp);

    return res.json({ ok: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ ok: true }); // generic
  }
}

// Verify OTP (signup / forgot / phone verify)
async function verifyOtp(req, res) {
  try {
    const { subject, otp, purpose = 'password_reset' } = req.body;
    if (!subject || !otp) return res.status(400).json({ error: 'subject and otp required' });

    const otpRecord = await Otp.findOne({ subject, purpose }).sort({ createdAt: -1 });
    if (!otpRecord) return res.status(400).json({ error: 'invalid_or_expired_otp' });
    if (otpRecord.expiresAt < new Date()) return res.status(400).json({ error: 'otp_expired' });

    if (hashOtp(otp) !== otpRecord.otpHash) {
      otpRecord.attempts = (otpRecord.attempts || 0) + 1;
      await otpRecord.save();
      return res.status(400).json({ error: 'invalid_otp' });
    }

    // valid
    await Otp.deleteMany({ subject, purpose });

    // if purpose is verify_phone or verify_email, update user record
    if (purpose === 'verify_phone') {
      await User.findOneAndUpdate({ phone: subject }, { phoneVerified: true });
      return res.json({ ok: true, message: 'phone_verified' });
    } else if (purpose === 'verify_email') {
      await User.findOneAndUpdate({ email: subject }, { emailVerified: true });
      return res.json({ ok: true, message: 'email_verified' });
    } else if (purpose === 'password_reset') {
      // issue a short-lived reset token (JWT with purpose)
      const user = subject.includes('@') ? await User.findOne({ email: subject }) : await User.findOne({ phone: subject });
      if (!user) return res.status(400).json({ error: 'user_not_found' });
      const resetToken = jwt.sign({ sub: user._id.toString(), purpose: 'password_reset' }, process.env.JWT_SECRET, { expiresIn: '15m' });
      return res.json({ ok: true, resetToken });
    }

    return res.json({ ok: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'server_error' });
  }
}

// Reset password (using resetToken)
async function resetPassword(req, res) {
  try {
    const { resetToken, newPassword } = req.body;
    if (!resetToken || !newPassword) return res.status(400).json({ error: 'resetToken and newPassword required' });

    let payload;
    try { payload = jwt.verify(resetToken, process.env.JWT_SECRET); }
    catch (e) { return res.status(400).json({ error: 'invalid_or_expired_token' }); }

    if (!payload.purpose || payload.purpose !== 'password_reset') return res.status(400).json({ error: 'invalid_token_purpose' });

    const user = await User.findById(payload.sub);
    if (!user) return res.status(400).json({ error: 'user_not_found' });

    user.passwordHash = await bcrypt.hash(newPassword, SALT_ROUNDS);
    await user.save();

    // optionally invalidate refresh tokens by using a tokenVersion in DB (not in this minimal impl)
    return res.json({ ok: true, message: 'password_updated' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'server_error' });
  }
}

// Google OAuth (verify id_token from client)
async function googleOAuth(req, res) {
  try {
    const { id_token } = req.body;
    if (!id_token) return res.status(400).json({ error: 'id_token_required' });

    const payload = await verifyGoogleIdToken(id_token); // returns google payload
    const { sub: googleId, email, email_verified, name, picture } = payload;

    let user = await User.findOne({ $or: [{ googleId }, { email }] });
    if (!user) {
      user = new User({
        name,
        email,
        emailVerified: !!email_verified,
        googleId,
        avatarUrl: picture,
        loginMethods: ['google']
      });
      await user.save();
    } else {
      if (!user.googleId) user.googleId = googleId;
      if (!user.loginMethods.includes('google')) user.loginMethods.push('google');
      if (!user.avatarUrl && picture) user.avatarUrl = picture;
      await user.save();
    }

    user.lastLoginAt = new Date();
    await user.save();

    const tokens = tokensForUser(user);
    return res.json({ ok: true, user: { id: user._id, name: user.name, email: user.email }, tokens });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'google_oauth_failed' });
  }
}

module.exports = { register, login, sendOtp, verifyOtp, resetPassword, googleOAuth };
