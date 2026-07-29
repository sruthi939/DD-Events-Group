const jwt = require('jsonwebtoken');
const jwtConfig = require('../config/jwt');

const generateToken = (id, role = 'user') => {
  return jwt.sign({ id, role }, jwtConfig.secret, {
    expiresIn: jwtConfig.expire,
  });
};

module.exports = generateToken;
