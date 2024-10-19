# E-Learning Platform API

## Overview

This is an E-Learning Platform API built using Node.js, Express, and MongoDB. It allows users to register, login, enroll in courses, and manage their learning progress. The API includes features for user authentication, course management, and lesson completion tracking.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [License](#license)

## Features

- User registration and login
- Role-based access control (admin and user)
- Course management (CRUD operations)
- Lesson enrollment and tracking
- Track progress by marking lessons as complete

## Technologies Used

- **Node.js**: JavaScript runtime for building the API
- **Express**: Web framework for building RESTful APIs
- **MongoDB**: NoSQL database for data storage
- **Mongoose**: ODM library for MongoDB
- **JSON Web Tokens (JWT)**: For user authentication
- **CORS**: To enable cross-origin resource sharing
- **Cookie-parser**: To manage cookies

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/sohamvirani/Online-Learnig-Platform

2. Navigate to the project directory:

   cd e-learning-platform

3. Install the required dependencies:

   npm install

4. Set up your MongoDB database (e.g., locally or using MongoDB Atlas) and update the connection string in db/db.connect.js.

5. (Optional) Create a .env file to store environment variables (like your MongoDB URI) if needed.

## Usage

1. Start the server : npm start

2. The API will be running on http://localhost:5000.
