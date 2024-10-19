const mongoose = require("mongoose");

const initiateDBConnection = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/online-learning-platform ", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Successfully connected to MongoDB");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
    process.exit(1); // Exits the process if the connection fails
  }
};

module.exports = initiateDBConnection;
