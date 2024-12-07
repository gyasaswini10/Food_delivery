// controllers/restaurantController.js
const Restaurant = require('../models/Restaurant');
const User = require('../models/User');

const registerRestaurant = async (req, res) => {
  try {
    const { restaurantName, ownerName, email, phoneNumber, address, userId } = req.body;

    // Check if the user exists and is a restaurant manager
    const user = await User.findById(userId);
    if (!user || user.role !== 'restaurant_manager') {
      return res.status(400).json({ message: 'User is not a valid restaurant manager' });
    }

    // Create the restaurant
    const newRestaurant = new Restaurant({
      restaurantName,
      ownerName,
      email,
      phoneNumber,
      address,
      manager: userId  // Link restaurant to the user (restaurant manager)
    });

    // Save the restaurant to the database
    await newRestaurant.save();
    res.status(201).json({ message: 'Restaurant registered successfully', restaurant: newRestaurant });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  registerRestaurant
};
