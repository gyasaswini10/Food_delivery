// controllers/userController.js
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Register a new user
const register1 = async (req, res) => {
  try {
    const { fullName, phone, email, country, city, address, password } = req.body;

    // Check if user already exists
    const userExists = await User.findOne({ $or: [{ email }, { phone }] });
    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const newUser = new User({
      fullName,
      phone,
      email,
      country,
      city,
      address,
      password: hashedPassword,
    });

    // Save user to the database
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Login user
const login1 = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, 'your_jwt_secret', { expiresIn: '1h' });

    res.json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get current user
const Currentuser = async (req, res) => {
  try {
    const user = await User.findById(req.userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Update user
const updateUser = async (req, res) => {
  try {
    const { fullName, phone, email, country, city, address, password } = req.body;

    // Find and update the user
    const user = await User.findByIdAndUpdate(
      req.userId,
      { fullName, phone, email, country, city, address, password },
      { new: true }
    );
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Delete user
const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.userId);
    res.json({ message: 'User deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  register1,
  login1,
  Currentuser,
  updateUser,
  deleteUser,
};
