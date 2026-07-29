const sendEmail = require('../utils/sendEmail');

const sendWelcomeEmail = async (user) => {
  await sendEmail({
    email: user.email,
    subject: 'Welcome to DD Events Group!',
    message: `Hello ${user.name},\n\nWelcome to DD Events Group! We are thrilled to help you create unforgettable event experiences.`,
    html: `<h2>Welcome ${user.name}!</h2><p>Thank you for creating an account with DD Events Group.</p>`,
  });
};

const sendOTPEmail = async (email, otp) => {
  await sendEmail({
    email,
    subject: 'Your DD Events Verification Code',
    message: `Your OTP verification code is: ${otp}. It will expire in 5 minutes.`,
    html: `<h3>DD Events Verification</h3><p>Your verification code is: <strong>${otp}</strong></p><p>This code expires in 5 minutes.</p>`,
  });
};

module.exports = {
  sendWelcomeEmail,
  sendOTPEmail,
};
