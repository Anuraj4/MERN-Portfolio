const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); // Load environment variables early
const contactRoute = require('../server/Routes/contact');

// Initialize Express
const app = express();

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Parse incoming requests with JSON payloads

// Import routes
// const contactRoute = require('./Routes/contact');

// Use routes
app.use('/api', contactRoute);

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('MongoDB connected...'))
  .catch((err) => {
    console.error('MongoDB connection error:', err);
    process.exit(1); // Exit process if the connection fails
  });

// Basic route to check if the server is running
app.get('/', (req, res) => {
  res.send('Backend is running');
});

// Listen on the specified port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
