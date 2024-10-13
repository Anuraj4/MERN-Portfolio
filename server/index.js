const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); // Load environment variables early

// Initialize Express
const app = express();

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Parse incoming requests with JSON payloads

// Import routes
const contactRoute = require('./Routes/contact');

// Use routes
app.use('/api', contactRoute);

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected...'))
  .catch((err) => console.log('MongoDB connection error:', err));

// Basic route to check if server is running
app.get('/', (req, res) => {
  res.send('Backend is running');
});

// Listen on the specified port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
