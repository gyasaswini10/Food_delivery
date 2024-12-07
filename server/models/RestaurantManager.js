const mongoose = require('mongoose');

const restaurantManagerSchema = new mongoose.Schema({
  restaurantName: String,
  ownerName: String,
  email: { type: String, unique: true },
  phoneNumber: String,
  address: String,
});

module.exports = mongoose.model('RestaurantManager', restaurantManagerSchema);
