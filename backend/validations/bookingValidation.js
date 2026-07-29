const validateBookingInput = (req, res, next) => {
  const { eventId, eventDate, totalAmount } = req.body;
  if (!eventId || !eventDate || !totalAmount) {
    res.status(400);
    throw new Error('Please provide eventId, eventDate, and totalAmount');
  }
  next();
};

module.exports = {
  validateBookingInput,
};
