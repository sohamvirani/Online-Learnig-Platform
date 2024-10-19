const Course = require("../models/course.model").courseSchema;

const fetchCourses = async () => {
  return await Course.find();
};

const createCourse = async (data) => {
  return await Course.create(data);
};

const modifyCourse = async (courseId, data) => {
  return await Course.findByIdAndUpdate(courseId, { $set: data }, { new: true });
};

const removeCourse = async (courseId) => {
  return await Course.findByIdAndDelete(courseId);
};

module.exports = {
  fetchCourses,
  createCourse,
  modifyCourse,
  removeCourse,
};
