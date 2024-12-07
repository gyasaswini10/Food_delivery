const express = require('express');
const RestaurantManager = require('../models/RestaurantManager');
const router = express.Router();
const bcrypt = require('bcryptjs');


// POST route to handle registration
router.post('/register', async (req, res) => {
  const { restaurantName, ownerName, email, phoneNumber, address, password } = req.body;

  try {
    const newManager = new RestaurantManager({
      restaurantName,
      ownerName,
      email,
      phoneNumber,
      address,
      password, // Password is now included
    });

    await newManager.save();
    res.status(201).send({ message: 'Restaurant Manager registered successfully!' });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

module.exports = router;

// POST route to handle login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const manager = await RestaurantManager.findOne({ email });

    if (!manager) {
      return res.status(404).send({ error: 'Restaurant Manager not found!' });
    }

    // Compare entered password with hashed password
    const isMatch = await bcrypt.compare(password, manager.password);
    if (!isMatch) {
      return res.status(400).send({ error: 'Invalid email or password!' });
    }

    res.status(200).send({ message: 'Login successful!' });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

