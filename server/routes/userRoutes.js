// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const authenticateJWT = require('../middleware/authenticateJWT');
const { register1, login1, Currentuser, updateUser, deleteUser } = require('../controllers/userController');

// Register route
router.post('/register', register1);

// Login route
router.post('/login', login1);

// Get current user info (protected route)
router.get('/me', authenticateJWT, Currentuser);

// Update user info (protected route)
router.put('/me', authenticateJWT, updateUser);

// Delete user (protected route)
router.delete('/me', authenticateJWT, deleteUser);

module.exports = router;
