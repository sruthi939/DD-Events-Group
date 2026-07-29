const express = require('express');
const router = express.Router();
const {
  createBooking,
  getMyBookings,
  getAllBookings,
} = require('../controllers/bookingController');
const { protect } = require('../middleware/authMiddleware');
const { admin } = require('../middleware/adminMiddleware');
const { validateBookingInput } = require('../validations/bookingValidation');

router.route('/')
  .post(protect, validateBookingInput, createBooking)
  .get(protect, admin, getAllBookings);

router.get('/my-bookings', protect, getMyBookings);

module.exports = router;
