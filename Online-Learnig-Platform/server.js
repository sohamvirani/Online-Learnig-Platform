const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const initializeDatabase = require('./db/db.connect');

const userRoutes = require('./routes/user.route');
const courseRoutes = require('./routes/course.route');
const enrollmentRoutes = require('./routes/enrollment.route');

const app = express();
initializeDatabase();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

// Define routes for the API
app.use('/api/users', userRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/enrollments', enrollmentRoutes);

// Root route
app.get('/', (req, res) => {
  res.send("Welcome to the Education Management API");
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is up and running at http://localhost:${PORT}`);
});
