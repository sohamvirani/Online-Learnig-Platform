const Enrollment = require("../models/Enrollment.model").enrollmentSchema;

const registerUser = async (userData) => {
  return await Enrollment.create(userData);
};

const markLessonAsComplete = async (enrollmentId, lessonId) => {
  return await Enrollment.findByIdAndUpdate(
    enrollmentId,
    { $addToSet: { completedLessons: lessonId } },
    { new: true }
  );
};

module.exports = {
  registerUser,
  markLessonAsComplete,
};
