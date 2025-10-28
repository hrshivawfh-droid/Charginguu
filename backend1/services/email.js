// services/email.js
/*const sgMail = require('@sendgrid/mail');
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

module.exports = { sendOtpEmail };*/
// services/email.js
const nodemailer = require('nodemailer');

// Create transporter using Gmail SMTP
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.SENDER_EMAIL, //|| 'madhusanaboni952@gmail.com',
    pass: process.env.SENDER_PASSWORD //|| 'kooyhjipwokenfjj'
  }
});

async function sendOtpEmail(to, otp, purpose = 'OTP') {
    const subject = purpose === 'password_reset' 
        ? 'Charginguu: Password reset OTP' 
        : `Charginguu: ${purpose}`;
    
    const text = `Your OTP is ${otp}. It expires in ${process.env.OTP_TTL_MINUTES || 10} minutes.`;
    
    const mailOptions = {
        to,
        from: process.env.FROM_EMAIL || 'no-reply@charginguu.com',
        subject,
        text,
        html:`<p>${text}</p>`
    };

    try {
        const result = await transporter.sendMail(mailOptions);
        console.log('Email sent successfully:', result.messageId);
        return result;
    } catch (error) {
        console.error('Error sending email:', error);
        throw error;
    }
}

module.exports = { sendOtpEmail };
