const { createToken, verifyToken } = require("../middlewares/auth");
const userService = require("../services/user.service");

/* FETCH ALL USERS */
const retrieveUsers = async (req, res) => {
  try {
    const usersList = await userService.getUser();
    return res.status(200).json({
      message: "Users fetched successfully",
      data: usersList,
    });
  } catch (error) {
    return res.status(500).json({ message: "Error retrieving users", error: error.message });
  }
};

/* GET PROFILE DETAILS */
const getUserProfile = async (req, res) => {
  const token = req.cookies["login_token"];
  if (!token) {
    return res.status(401).json({ message: "Login required to access this resource" });
  }
  try {
    const user = verifyToken(token);
    return res.status(200).json({ message: "Profile fetched successfully", user });
  } catch (error) {
    return res.status(401).json({ message: "Invalid token, please login again", error: error.message });
  }
};

/* REGISTER NEW USER */
const registerUser = async (req, res) => {
  try {
    const userData = req.body;
    const existingUser = await userService.getUserByEmail(userData.email);

    if (existingUser) {
      return res.status(409).json({ message: "User with this email already exists" });
    }

    const newUser = await userService.addUser(userData);
    return res.status(201).json({
      message: "User successfully registered",
      data: newUser,
    });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

/* LOGIN USER */
const authenticateUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const userRecord = await userService.findUser(email);
    if (!userRecord) {
      return res.status(404).json({ message: "User not found with the provided email" });
    }

    if (password === userRecord.password) {
      const tokenData = {
        _id: userRecord._id,
        email: userRecord.email,
        contactNumber: userRecord.contactNumber,
        role: userRecord.role,
      };

      const token = createToken(tokenData);
      res.cookie("login_token", token); // Save token in cookies
      return res.status(200).json({ message: "Login successful" });
    } else {
      return res.status(400).json({ message: "Incorrect password" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Login failed", error: error.message });
  }
};

/* MODIFY USER DETAILS */
const modifyUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const userDetails = req.body;

    const updatedUser = await userService.updateUser(userId, userDetails);
    return res.status(200).json({
      message: "User details updated",
      data: updatedUser,
    });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

/* REMOVE USER */
const removeUser = async (req, res) => {
  try {
    const userId = req.params.id;
    await userService.deleteUser(userId);

    return res.status(200).json({
      message: "User successfully removed",
    });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

module.exports = {
  retrieveUsers,
  getUserProfile,
  registerUser,
  authenticateUser,
  modifyUser,
  removeUser,
};
