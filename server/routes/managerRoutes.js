const express = require('express');
const { loginRestaurantManager } = require('../controllers/restaurantManagerController');

const router = express.Router();

// POST /auth/login
router.post('/login', loginRestaurantManager);

module.exports = router;
