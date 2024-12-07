const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');  // Import cookie-parser
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const reviewRoutes = require('./routes/reviewRoutes'); // Import review routes
const restaurantRoutes = require('./routes/restaurantRoutes');
const managerRoutes = require('./routes/managerRoutes'); // Import restaurant routes
const session = require('express-session'); // Add express-session for session management

dotenv.config(); // Load environment variables

const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

const app = express();

// CORS configuration
app.use(cors({
  origin: true, // Allows all origins
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true, // Include credentials in cross-origin requests
}));

// Middleware for parsing JSON requests
app.use(express.json());

// Session setup
app.use(session({
  secret: 'your-secret-key', // Secret key for session encryption
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // Set to true if using HTTPS
}));

// User-related routes
app.use('/api/users', userRoutes);

// Review-related routes
app.use('/api/reviews', reviewRoutes);

// Restaurant-related routes
app.use('/api', restaurantRoutes);

// Manager-related routes (authentication)
app.use('/auth', managerRoutes);

// Health Check Endpoint
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Start the server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
