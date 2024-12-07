const express = require('express');
const bcrypt = require('bcryptjs');
const RestaurantManager = require('../models/RestaurantManager');
const router = express.Router();

// POST route for login
router.post('/create-manager', async (req, res) => {
    console.log(req.body);  // Log the request body
    const { name, email, password } = req.body;
  
    if (!name || !email || !password) {
      return res.status(400).json({ error: 'Name, email, and password are required' });
    }
  
    try {
      const manager = new RestaurantManager({ name, email, password });
      await manager.save();
      res.status(201).json(manager);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error creating manager' });
    }
  });
  

module.exports = router;
