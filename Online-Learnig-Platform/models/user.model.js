const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "User name is required"],
    },
    emailAddress: {
      type: String,
      required: [true, "Email is mandatory"],
      unique: true,
    },
    userPassword: {
      type: String,
      required: [true, "Password is required"],
    },
    phoneNumber: {
      type: String,
    },
    userRole: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", UserSchema);
