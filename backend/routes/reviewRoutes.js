const express = require('express');
const router = express.Router();
const { getEventReviews, addReview } = require('../controllers/reviewController');
const { protect } = require('../middleware/authMiddleware');

router.get('/event/:eventId', getEventReviews);
router.post('/', protect, addReview);

module.exports = router;
