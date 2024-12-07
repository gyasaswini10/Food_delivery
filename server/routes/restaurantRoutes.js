const express = require('express');
const RestaurantManager = require('../models/RestaurantManager');
const router = express.Router();

// POST route to handle registration
router.post('/register', async (req, res) => {
  const { restaurantName, ownerName, email, phoneNumber, address } = req.body;

  try {
    const newManager = new RestaurantManager({
      restaurantName,
      ownerName,
      email,
      phoneNumber,
      address,
    })

    await newManager.save();
    res.status(201).send({ message: 'Restaurant Manager registered successfully!' });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

module.exports = router;