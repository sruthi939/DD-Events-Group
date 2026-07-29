const asyncHandler = require('../utils/asyncHandler');
const User = require('../models/User');
const Event = require('../models/Event');
const Booking = require('../models/Booking');
const Payment = require('../models/Payment');
const { sendSuccess } = require('../utils/responseHandler');

// @desc    Get dashboard metrics (Admin)
// @route   GET /api/v1/dashboard/stats
// @access  Private/Admin
const getDashboardStats = asyncHandler(async (req, res) => {
  const totalUsers = await User.countDocuments();
  const totalEvents = await Event.countDocuments();
  const totalBookings = await Booking.countDocuments();
  
  const payments = await Payment.aggregate([
    { $match: { status: 'success' } },
    { $group: { _id: null, totalRevenue: { $sum: '$amount' } } },
  ]);

  const totalRevenue = payments.length > 0 ? payments[0].totalRevenue : 0;

  return sendSuccess(res, 'Dashboard metrics retrieved', {
    totalUsers,
    totalEvents,
    totalBookings,
    totalRevenue,
  });
});

module.exports = {
  getDashboardStats,
};
