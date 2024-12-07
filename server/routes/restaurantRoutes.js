const express = require('express');
const router = express.Router();
const Restaurant = require('../models/Restaurant'); // Assuming this is your restaurant model
const bcrypt = require('bcryptjs'); // For password hashing
const jwt = require('jsonwebtoken'); // For JWT token generation

// Register Restaurant
router.post('/register', async (req, res) => {
  const { restaurantName, ownerName, email, phoneNumber, address } = req.body;
  try {
    const existingRestaurant = await Restaurant.findOne({ email });
    if (existingRestaurant) {
      return res.status(400).json({ message: 'Restaurant already registered.' });
    }

    const newRestaurant = new Restaurant({
      restaurantName,
      ownerName,
      email,
      phoneNumber,
      address,
    });

    await newRestaurant.save();
    res.status(201).json({ message: 'Restaurant registered successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error. Please try again.' });
  }
});

// Login Restaurant Manager
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const restaurant = await Restaurant.findOne({ email });
    if (!restaurant) {
      return res.status(400).json({ message: 'Restaurant not found.' });
    }

    // Assuming you have a password field in the database
    const isMatch = await bcrypt.compare(password, restaurant.password); // Compare hashed passwords
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials.' });
    }

    // Generate JWT Token
    const token = jwt.sign({ restaurantId: restaurant._id }, 'yourSecretKey', { expiresIn: '1h' });
    res.json({ message: 'Login successful', token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error. Please try again.' });
  }
});

module.exports = router;
