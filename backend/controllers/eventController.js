const asyncHandler = require('../utils/asyncHandler');
const Event = require('../models/Event');
const { sendSuccess } = require('../utils/responseHandler');

// @desc    Get all events
// @route   GET /api/v1/events
// @access  Public
const getEvents = asyncHandler(async (req, res) => {
  const events = await Event.find({ status: 'published' }).populate('category', 'name icon');
  return sendSuccess(res, 'Events retrieved successfully', events);
});

// @desc    Get single event by ID
// @route   GET /api/v1/events/:id
// @access  Public
const getEventById = asyncHandler(async (req, res) => {
  const event = await Event.findById(req.params.id).populate('category', 'name icon');
  if (!event) {
    res.status(404);
    throw new Error('Event not found');
  }
  return sendSuccess(res, 'Event details retrieved', event);
});

// @desc    Create new event (Admin / Organizer)
// @route   POST /api/v1/events
// @access  Private/Admin
const createEvent = asyncHandler(async (req, res) => {
  const event = await Event.create({
    ...req.body,
    organizer: req.user._id,
  });
  return sendSuccess(res, 'Event created successfully', event, 201);
});

// @desc    Update event
// @route   PUT /api/v1/events/:id
// @access  Private/Admin
const updateEvent = asyncHandler(async (req, res) => {
  const event = await Event.findById(req.params.id);
  if (!event) {
    res.status(404);
    throw new Error('Event not found');
  }
  const updatedEvent = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });
  return sendSuccess(res, 'Event updated successfully', updatedEvent);
});

// @desc    Delete event
// @route   DELETE /api/v1/events/:id
// @access  Private/Admin
const deleteEvent = asyncHandler(async (req, res) => {
  const event = await Event.findById(req.params.id);
  if (!event) {
    res.status(404);
    throw new Error('Event not found');
  }
  await event.deleteOne();
  return sendSuccess(res, 'Event removed successfully');
});

module.exports = {
  getEvents,
  getEventById,
  createEvent,
  updateEvent,
  deleteEvent,
};
