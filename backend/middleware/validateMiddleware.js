const validateRequest = (schema) => (req, res, next) => {
  if (!schema) return next();
  const { error } = schema.validate(req.body, { abortEarly: false });
  if (error) {
    const errorDetails = error.details.map((detail) => detail.message);
    res.status(400);
    throw new Error(`Validation Error: ${errorDetails.join(', ')}`);
  }
  next();
};

module.exports = validateRequest;
