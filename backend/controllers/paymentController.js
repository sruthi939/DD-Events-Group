const asyncHandler = require('../utils/asyncHandler');
const Payment = require('../models/Payment');
const Booking = require('../models/Booking');
const { sendSuccess } = require('../utils/responseHandler');
const { processPaymentGateway } = require('../services/paymentService');

// @desc    Process new payment
// @route   POST /api/v1/payments
// @access  Private
const createPayment = asyncHandler(async (req, res) => {
  const { bookingId, amount, paymentMethod } = req.body;

  const booking = await Booking.findById(bookingId);
  if (!booking) {
    res.status(404);
    throw new Error('Booking not found');
  }

  const gatewayResult = await processPaymentGateway({ amount, paymentMethod });

  const payment = await Payment.create({
    user: req.user._id,
    booking: bookingId,
    amount,
    paymentMethod,
    transactionId: gatewayResult.transactionId,
    status: 'success',
  });

  booking.paymentStatus = 'paid';
  booking.status = 'confirmed';
  booking.paymentId = payment._id;
  await booking.save();

  return sendSuccess(res, 'Payment processed successfully', payment, 201);
});

module.exports = {
  createPayment,
};
