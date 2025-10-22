// utils/jwt.js
const jwt = require('jsonwebtoken');

function signAccessToken(payload) {
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN || '15m' });
}
function verifyAccessToken(token) {
  return jwt.verify(token, process.env.JWT_SECRET);
}
function signRefreshToken(payload) {
  return jwt.sign(payload, process.env.JWT_REFRESH_SECRET, { expiresIn: '30d' });
}

module.exports = { signAccessToken, verifyAccessToken, signRefreshToken };
