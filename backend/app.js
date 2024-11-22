// app.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables from .env
dotenv.config();

// Get MongoDB URI from .env file
const mongoURI = process.env.MONGODB_URI;

// Ensure that the URI is loaded properly
if (!mongoURI) {
  console.error("MongoDB URI is not defined in the .env file.");
  process.exit(1);  // Exit if MongoDB URI is not set
}

const app = express();

// Middleware
app.use(cors());  // Enable Cross-Origin Resource Sharing
app.use(express.json());  // Parse JSON requests

// MongoDB connection
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log('MongoDB connection error:', err));

// Routes (Example)
app.use('/api/users', require('./routes/userRoutes'));

module.exports = app;  // Export app to be used in server.js
