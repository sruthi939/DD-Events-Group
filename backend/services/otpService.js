const OTP = require('../models/OTP');
const { sendOTPEmail } = require('./emailService');

const generateOTP = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

const sendVerificationOTP = async (email) => {
  await OTP.deleteMany({ email }); // Delete old OTPs for this email
  const otpCode = generateOTP();
  await OTP.create({ email, otp: otpCode });
  await sendOTPEmail(email, otpCode);
  return otpCode;
};

const verifyOTPCode = async (email, otpCode) => {
  const record = await OTP.findOne({ email, otp: otpCode });
  if (!record) return false;
  await OTP.deleteOne({ _id: record._id });
  return true;
};

module.exports = {
  sendVerificationOTP,
  verifyOTPCode,
};
