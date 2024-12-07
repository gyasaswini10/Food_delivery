const RestaurantManager = require('../models/RestaurantManager');
const jwt = require('jsonwebtoken');

const loginRestaurantManager = async (req, res) => {
  const { email, password } = req.body;

  try {
    const manager = await RestaurantManager.findOne({ email });

    if (!manager) {
      return res.status(404).json({ message: 'Manager not found.' });
    }

    const isMatch = await manager.matchPassword(password);

    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid email or password.' });
    }

    const token = jwt.sign({ id: manager._id }, process.env.JWT_SECRET, {
      expiresIn: '1d',
    });

    res.status(200).json({
      id: manager._id,
      name: manager.ownerName,
      email: manager.email,
      token,
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error.', error });
  }
};

module.exports = { loginRestaurantManager };
