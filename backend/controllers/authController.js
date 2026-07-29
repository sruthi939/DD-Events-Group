const asyncHandler = require('../utils/asyncHandler');
const User = require('../models/User');
const generateToken = require('../utils/generateToken');
const { sendSuccess, sendError } = require('../utils/responseHandler');
const { sendVerificationOTP, verifyOTPCode } = require('../services/otpService');

// @desc    Register new user
// @route   POST /api/v1/auth/register
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, phone, password } = req.body;

  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error('User with this email already exists');
  }

  const user = await User.create({
    name,
    email,
    phone,
    password,
  });

  if (user) {
    const token = generateToken(user._id, user.role);
    return sendSuccess(
      res,
      'User registered successfully',
      {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        token,
      },
      201
    );
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }
});

// @desc    Auth user & get token
// @route   POST /api/v1/auth/login
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    const token = generateToken(user._id, user.role);
    return sendSuccess(res, 'Login successful', {
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      token,
    });
  } else {
    res.status(401);
    throw new Error('Invalid email or password');
  }
});

// @desc    Get current user profile
// @route   GET /api/v1/auth/me
// @access  Private
const getMe = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id).select('-password');
  return sendSuccess(res, 'Profile retrieved', user);
});

// @desc    Send OTP to email
// @route   POST /api/v1/auth/send-otp
// @access  Public
const sendOTP = asyncHandler(async (req, res) => {
  const { email } = req.body;
  if (!email) {
    res.status(400);
    throw new Error('Email is required');
  }
  await sendVerificationOTP(email);
  return sendSuccess(res, 'Verification OTP sent to email');
});

// @desc    Verify OTP code
// @route   POST /api/v1/auth/verify-otp
// @access  Public
const verifyOTP = asyncHandler(async (req, res) => {
  const { email, otp } = req.body;
  if (!email || !otp) {
    res.status(400);
    throw new Error('Email and OTP code are required');
  }
  const isVerified = await verifyOTPCode(email, otp);
  if (!isVerified) {
    res.status(400);
    throw new Error('Invalid or expired OTP code');
  }
  return sendSuccess(res, 'OTP verified successfully');
});

module.exports = {
  registerUser,
  loginUser,
  getMe,
  sendOTP,
  verifyOTP,
};
