module.exports = {
  secret: process.env.JWT_SECRET || 'supersecret_dd_events_jwt_key_2026',
  expire: process.env.JWT_EXPIRE || '30d',
};
