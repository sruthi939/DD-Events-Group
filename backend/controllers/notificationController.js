const asyncHandler = require('../utils/asyncHandler');
const Notification = require('../models/Notification');
const { sendSuccess } = require('../utils/responseHandler');

// @desc    Get user notifications
// @route   GET /api/v1/notifications
// @access  Private
const getNotifications = asyncHandler(async (req, res) => {
  const notifications = await Notification.find({ recipient: req.user._id }).sort({ createdAt: -1 });
  return sendSuccess(res, 'Notifications retrieved', notifications);
});

// @desc    Mark notification as read
// @route   PUT /api/v1/notifications/:id/read
// @access  Private
const markAsRead = asyncHandler(async (req, res) => {
  const notification = await Notification.findOne({ _id: req.params.id, recipient: req.user._id });
  if (!notification) {
    res.status(404);
    throw new Error('Notification not found');
  }
  notification.read = true;
  await notification.save();
  return sendSuccess(res, 'Notification marked as read', notification);
});

module.exports = {
  getNotifications,
  markAsRead,
};
