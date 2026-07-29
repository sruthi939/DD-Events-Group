const asyncHandler = require('../utils/asyncHandler');
const Booking = require('../models/Booking');
const { sendSuccess } = require('../utils/responseHandler');

// @desc    Create new booking
// @route   POST /api/v1/bookings
// @access  Private
const createBooking = asyncHandler(async (req, res) => {
  const { eventId, eventDate, guests, totalAmount, notes } = req.body;

  const booking = await Booking.create({
    user: req.user._id,
    event: eventId,
    eventDate,
    guests: guests || 1,
    totalAmount,
    notes,
  });

  return sendSuccess(res, 'Booking created successfully', booking, 201);
});

// @desc    Get user bookings
// @route   GET /api/v1/bookings/my-bookings
// @access  Private
const getMyBookings = asyncHandler(async (req, res) => {
  const bookings = await Booking.find({ user: req.user._id }).populate('event', 'title location date price images');
  return sendSuccess(res, 'User bookings retrieved', bookings);
});

// @desc    Get all bookings (Admin)
// @route   GET /api/v1/bookings
// @access  Private/Admin
const getAllBookings = asyncHandler(async (req, res) => {
  const bookings = await Booking.find({})
    .populate('user', 'name email phone')
    .populate('event', 'title date');
  return sendSuccess(res, 'All bookings retrieved', bookings);
});

module.exports = {
  createBooking,
  getMyBookings,
  getAllBookings,
};
