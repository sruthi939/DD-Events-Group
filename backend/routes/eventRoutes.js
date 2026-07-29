const express = require('express');
const router = express.Router();
const {
  getEvents,
  getEventById,
  createEvent,
  updateEvent,
  deleteEvent,
} = require('../controllers/eventController');
const { protect } = require('../middleware/authMiddleware');
const { admin } = require('../middleware/adminMiddleware');
const { validateEventInput } = require('../validations/eventValidation');

router.route('/')
  .get(getEvents)
  .post(protect, admin, validateEventInput, createEvent);

router.route('/:id')
  .get(getEventById)
  .put(protect, admin, updateEvent)
  .delete(protect, admin, deleteEvent);

module.exports = router;
