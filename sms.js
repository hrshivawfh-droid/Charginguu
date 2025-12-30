// services/sms.js

async function sendOtpSms(phone, otp) {
  // Mock SMS (for development)
  console.log(`📲 OTP sent to ${phone}: ${otp}`);
  return true;
}

module.exports = { sendOtpSms };
