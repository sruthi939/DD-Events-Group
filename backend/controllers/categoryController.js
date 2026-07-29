const asyncHandler = require('../utils/asyncHandler');
const Category = require('../models/Category');
const { sendSuccess } = require('../utils/responseHandler');

// @desc    Get all categories
// @route   GET /api/v1/categories
// @access  Public
const getCategories = asyncHandler(async (req, res) => {
  const categories = await Category.find({});
  return sendSuccess(res, 'Categories retrieved', categories);
});

// @desc    Create category (Admin)
// @route   POST /api/v1/categories
// @access  Private/Admin
const createCategory = asyncHandler(async (req, res) => {
  const { name, description, icon } = req.body;
  const category = await Category.create({ name, description, icon });
  return sendSuccess(res, 'Category created', category, 201);
});

module.exports = {
  getCategories,
  createCategory,
};
