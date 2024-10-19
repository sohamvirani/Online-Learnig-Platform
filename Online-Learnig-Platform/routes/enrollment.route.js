const express = require('express');
const { authenticate } = require('../middlewares/auth');
const { enrollUser, completeLesson } = require('../controllers/enrollment.controller');

const router = express.Router();

// Route to enroll a user in a course
router.post('/enroll', authenticate, enrollUser);

// Route to mark a lesson as complete for a specific enrollment
router.post('/enroll/:enrollmentId/lessons/:lessonId/complete', authenticate, completeLesson);

module.exports = router;
