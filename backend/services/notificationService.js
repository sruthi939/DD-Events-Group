const Notification = require('../models/Notification');

const createNotification = async (recipientId, title, message, type = 'info') => {
  return await Notification.create({
    recipient: recipientId,
    title,
    message,
    type,
  });
};

module.exports = {
  createNotification,
};
