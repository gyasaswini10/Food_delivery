const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const restaurantManagerSchema = new mongoose.Schema({
  restaurantName: { type: String, required: true },
  ownerName: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  address: { type: String, required: true },
  password: { type: String, required: true },  // Add password field
});

restaurantManagerSchema.pre('save', async function(next) {
  if (this.isModified('password') || this.isNew) {
    // Ensure password is a valid string
    if (typeof this.password === 'string') {
      this.password = await bcrypt.hash(this.password, 10);
    } else {
      return next(new Error('Password is not valid.'));
    }
  }
  next();
});

const RestaurantManager = mongoose.model('RestaurantManager', restaurantManagerSchema);
module.exports = mongoose.model('RestaurantManager', restaurantManagerSchema);
