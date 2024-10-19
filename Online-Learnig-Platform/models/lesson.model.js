const mongoose = require("mongoose");

const LessonSchema = new mongoose.Schema(
  {
    lessonTitle: {
      type: String,
      required: [true, "Lesson title is required"],
    },
    lessonContent: {
      type: String,
      required: [true, "Lesson content is required"],
    },
    relatedCourse: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Lesson", LessonSchema);
