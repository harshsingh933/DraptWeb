const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = require('./app');
const { connectDB } = require('./utils/db');

require('dotenv').config();

// Database connection
connectDB();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
