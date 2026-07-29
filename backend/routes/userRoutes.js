const express = require('express');
const router = express.Router();
const { getUsers, updateUserProfile } = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');
const { admin } = require('../middleware/adminMiddleware');

router.get('/', protect, admin, getUsers);
router.put('/profile', protect, updateUserProfile);

module.exports = router;
