const dotenv = require('dotenv');
dotenv.config();

const validateEnv = () => {
  const requiredVars = ['PORT', 'MONGO_URI', 'JWT_SECRET'];
  const missing = requiredVars.filter(varName => !process.env[varName]);

  if (missing.length > 0) {
    console.warn(`[Warning] Missing environment variables: ${missing.join(', ')}. Default fallbacks will be used where available.`);
  }
};

module.exports = {
  port: process.env.PORT || 5000,
  mongoUri: process.env.MONGO_URI || 'mongodb://localhost:27017/dd_events',
  jwtSecret: process.env.JWT_SECRET || 'default_jwt_secret',
  jwtExpire: process.env.JWT_EXPIRE || '30d',
  validateEnv,
};
