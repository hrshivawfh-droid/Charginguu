// routes/auth.js
const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/authControllers');

router.post('/register', ctrl.register);
router.post('/login', ctrl.login);
router.post('/send-otp', ctrl.sendOtp);         // { subject, purpose }
router.post('/verify-otp', ctrl.verifyOtp);     // { subject, otp, purpose }
router.post('/reset-password', ctrl.resetPassword); // { resetToken, newPassword }
router.post('/oauth/google', ctrl.googleOAuth);

module.exports = router;
