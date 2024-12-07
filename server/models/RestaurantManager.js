const mongoose = require('mongoose');

const restaurantManagerSchema = new mongoose.Schema({
  restaurantName: String,
  ownerName: String,
  email: { type: String},
  phoneNumber: String,
  address: String,
});

module.exports = mongoose.model('RestaurantManager', restaurantManagerSchema);
