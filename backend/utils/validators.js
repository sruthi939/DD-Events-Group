const isValidEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
};

const isValidPhone = (phone) => {
  const re = /^[0-9+\-\s()]{7,15}$/;
  return re.test(String(phone));
};

module.exports = {
  isValidEmail,
  isValidPhone,
};
