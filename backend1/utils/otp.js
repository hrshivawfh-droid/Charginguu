// utils/otp.js
const crypto = require('crypto');
const TTL = parseInt(process.env.OTP_TTL_MINUTES || '10', 10);
const HMAC_SECRET = process.env.OTP_HMAC_SECRET || 'change-me';

function genOtp() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

function hashOtp(otp) {
  return crypto.createHmac('sha256', HMAC_SECRET).update(otp).digest('hex');
}

function getExpiryDate() {
  return new Date(Date.now() + TTL * 60 * 1000);
}

module.exports = { genOtp, hashOtp, getExpiryDate };
