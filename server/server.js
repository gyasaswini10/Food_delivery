// server.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');

dotenv.config(); // Initialize dotenv configuration

const PORT = process.env.PORT || 5000;

// Attempt to connect to the database
connectDB(); // Connect to MongoDB

const app = express();

app.use(cors({
  origin: true, // Allow all origins
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));

// Middleware to parse incoming JSON requests
app.use(express.json());

// API routes
app.use('/api/users', userRoutes);

// Start the server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
