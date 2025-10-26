// services/email.js
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

async function sendOtpEmail(to, otp, purpose = 'OTP') {
  const subject = purpose === 'password_reset' ? 'Charginguu: Password reset OTP' : `Charginguu: ${purpose} OTP`;
  const text = `Your OTP is ${otp}. It expires in ${process.env.OTP_TTL_MINUTES || 10} minutes.`;
  const msg = {
    to,
    from: process.env.FROM_EMAIL || 'no-reply@charginguu.com',
    subject,
    text,
    html: `<p>${text}</p>`
  };
  return sgMail.send(msg);
}

module.exports = { sendOtpEmail };
