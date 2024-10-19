const express = require('express');
const { authenticate, restrict } = require('../middlewares/auth');
const {
  getCourses,
  addCourse,
  updateCourse,
  deleteCourse,
} = require('../controllers/course.controller');

const router = express.Router();

// Public route to fetch courses
router.get('/', getCourses);

// Admin-only routes for course management
router.post('/create', authenticate, restrict('admin'), addCourse);
router.put('/edit/:id', authenticate, restrict('admin'), updateCourse);
router.delete('/remove/:id', authenticate, restrict('admin'), deleteCourse);

module.exports = router;
