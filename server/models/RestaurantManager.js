const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const restaurantManagerSchema = new mongoose.Schema({
  restaurantName: { type: String, required: true },
  ownerName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phoneNumber: { type: String, required: true },
  address: { type: String, required: true },
  password: { type: String, required: true },
});

// Hash password before saving
restaurantManagerSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

// Method to match passwords
restaurantManagerSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const RestaurantManager = mongoose.model('RestaurantManager', restaurantManagerSchema);

module.exports = RestaurantManager;
