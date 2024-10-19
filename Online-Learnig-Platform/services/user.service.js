const User = require("../models/user.model").userSchema;

const fetchAllUsers = async () => {
  return await User.find();
};

const createUser = async (userData) => {
  return await User.create(userData);
};

const removeUser = async (userId) => {
  return await User.findByIdAndDelete(userId);
};

const modifyUser = async (userId, updatedData) => {
  return await User.findByIdAndUpdate(userId, { $set: updatedData }, { new: true });
};

const findUserByEmail = async (email) => {
  return await User.findOne({ email });
};

const getUserByEmail = async (email) => {
  return await User.findOne({ email });
};

module.exports = {
  fetchAllUsers,
  createUser,
  removeUser,
  modifyUser,
  getUserByEmail,
  findUserByEmail,
};
