const { isValidEmail } = require('../utils/validators');

const validateRegisterInput = (req, res, next) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(400);
    throw new Error('Please provide name, email, and password');
  }
  if (!isValidEmail(email)) {
    res.status(400);
    throw new Error('Please provide a valid email address');
  }
  if (password.length < 6) {
    res.status(400);
    throw new Error('Password must be at least 6 characters');
  }
  next();
};

const validateLoginInput = (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error('Please provide email and password');
  }
  next();
};

module.exports = {
  validateRegisterInput,
  validateLoginInput,
};
