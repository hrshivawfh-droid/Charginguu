// models/Otp.js
const mongoose = require('mongoose');

const otpSchema = new mongoose.Schema({
  subject: { type: String, required: true }, // email or phone
  otpHash: { type: String, required: true },
  purpose: { type: String, required: true }, // "signup", "password_reset", "verify_phone"
  expiresAt: { type: Date, required: true },
  attempts: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now }
});
otpSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });

module.exports = mongoose.model('Otp', otpSchema);
