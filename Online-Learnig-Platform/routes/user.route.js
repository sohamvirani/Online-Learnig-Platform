const express = require('express');
const { authenticate, restrict } = require('../middlewares/auth');
const {
  getUser,
  getProfile,
  addUser,
  loginUser,
  updateUser,
  deleteUser,
} = require('../controllers/user.controller');

const router = express.Router();

// Admin route to retrieve all users
router.get('/', authenticate, restrict('admin'), getUser);

// Route to fetch the profile of the authenticated user
router.get('/profile', authenticate, getProfile);

// User registration route
router.post('/register', addUser);

// User login route
router.post('/login', loginUser);

// Route to update user information
router.put('/:id', authenticate, updateUser);

// Admin route to delete a user
router.delete('/:id', authenticate, restrict('admin'), deleteUser);

module.exports = router;
