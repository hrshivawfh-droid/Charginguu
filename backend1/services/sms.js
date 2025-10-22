// services/sms.js
const Twilio = require('twilio');
const client = new Twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

async function sendOtpSms(to, otp) {
  const body = `Charginguu OTP: ${otp}. Expires in ${process.env.OTP_TTL_MINUTES || 10} min.`;
  return client.messages.create({ body, from: process.env.TWILIO_FROM_NUMBER, to });
}

module.exports = { sendOtpSms };
