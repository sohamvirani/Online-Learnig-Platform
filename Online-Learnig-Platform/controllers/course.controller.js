const courseService = require("../services/course.services");

const fetchCourses = async (req, res) => {
  try {
    const coursesList = await courseService.getCourses();
    return res.status(200).json({ message: "Courses fetched successfully", data: coursesList });
  } catch (error) {
    return res.status(500).json({ message: "Error fetching courses", error: error.message });
  }
};

const createCourse = async (req, res) => {
  try {
    const newCourse = await courseService.addCourse(req.body);
    return res.status(201).json({ message: "New course successfully added", data: newCourse });
  } catch (error) {
    return res.status(500).json({ message: "Error creating course", error: error.message });
  }
};

const modifyCourse = async (req, res) => {
  try {
    const updatedCourse = await courseService.updateCourse(req.params.id, req.body);
    return res.status(200).json({ message: "Course successfully updated", data: updatedCourse });
  } catch (error) {
    return res.status(500).json({ message: "Error updating course", error: error.message });
  }
};

const removeCourse = async (req, res) => {
  try {
    await courseService.deleteCourse(req.params.id);
    return res.status(200).json({ message: "Course deleted successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Error deleting course", error: error.message });
  }
};

module.exports = {
  fetchCourses,
  createCourse,
  modifyCourse,
  removeCourse,
};
