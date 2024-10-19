const enrollmentService = require("../services/enrollment.service");

const registerUserForCourse = async (req, res) => {
  try {
    const newEnrollment = await enrollmentService.enrollUser(req.body);
    return res.status(201).json({ message: "Enrollment successful", data: newEnrollment });
  } catch (error) {
    return res.status(500).json({ message: "Failed to enroll user", error: error.message });
  }
};

const markLessonComplete = async (req, res) => {
  try {
    const updatedEnrollment = await enrollmentService.completeLesson(req.params.enrollmentId, req.params.lessonId);
    return res.status(200).json({ message: "Lesson successfully completed", data: updatedEnrollment });
  } catch (error) {
    return res.status(500).json({ message: "Error completing lesson", error: error.message });
  }
};

module.exports = {
  registerUserForCourse,
  markLessonComplete,
};
