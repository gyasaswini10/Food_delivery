const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User'); // Import the User model
const authenticateJWT = require('../middleware/authenticateJWT');
// Import all the necessary controller functions
const { register1, login1, Currentuser, updateUser, deleteUser, getProfile } = require('../controllers/userController');

// Register route
router.post('/register', register1);

// Login route (Modified for cookie-based JWT)
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Your logic for user login
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '7d' } // Token expiry of 7 days
    );

    // Send the token in cookies
    res.cookie('token', token, {
      httpOnly: true,       // Prevent JavaScript access to the cookie
      secure: process.env.NODE_ENV === 'production',  // Use HTTPS in production
      sameSite: 'Strict',   // Helps prevent CSRF attacks
      maxAge: 7 * 24 * 60 * 60 * 1000  // 7 days
    });

    res.json({
      message: 'Login successful!',
      username: user.username,
      email: user.email,
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get current user info (protected route)
router.get('/me', authenticateJWT, Currentuser);

// Update user info (protected route)
router.put('/me', authenticateJWT, updateUser);

// Fetch profile details (protected route)
router.get('/profile', authenticateJWT, getProfile);

// Delete user (protected route)
router.delete('/me', authenticateJWT, deleteUser);

module.exports = router;
