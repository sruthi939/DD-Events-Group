const asyncHandler = require('../utils/asyncHandler');
const Review = require('../models/Review');
const { sendSuccess } = require('../utils/responseHandler');

// @desc    Get reviews for event
// @route   GET /api/v1/reviews/event/:eventId
// @access  Public
const getEventReviews = asyncHandler(async (req, res) => {
  const reviews = await Review.find({ event: req.params.eventId }).populate('user', 'name avatar');
  return sendSuccess(res, 'Reviews retrieved', reviews);
});

// @desc    Add review for event
// @route   POST /api/v1/reviews
// @access  Private
const addReview = asyncHandler(async (req, res) => {
  const { eventId, rating, comment } = req.body;
  const review = await Review.create({
    user: req.user._id,
    event: eventId,
    rating,
    comment,
  });
  return sendSuccess(res, 'Review added successfully', review, 201);
});

module.exports = {
  getEventReviews,
  addReview,
};
