// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String, index: true, sparse: true },
  emailVerified: { type: Boolean, default: false },
  phone: { type: String, index: true, sparse: true },
  phoneVerified: { type: Boolean, default: false },
  passwordHash: { type: String }, // null for social-only
  googleId: { type: String, index: true, sparse: true },
  avatarUrl: { type: String },
  loginMethods: { type: [String], default: ['local'] },
  createdAt: { type: Date, default: Date.now },
  lastLoginAt: { type: Date }
});

module.exports = mongoose.model('User', userSchema);
