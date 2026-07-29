const validateEventInput = (req, res, next) => {
  const { title, description, category, price, location, date } = req.body;
  if (!title || !description || !category || !location || !date) {
    res.status(400);
    throw new Error('Please fill in all required event fields (title, description, category, location, date)');
  }
  next();
};

module.exports = {
  validateEventInput,
};
