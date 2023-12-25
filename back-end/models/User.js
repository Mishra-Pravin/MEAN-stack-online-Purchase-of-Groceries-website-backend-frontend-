const mongoose = require('mongoose');

// Define the User schema
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, // Ensure that email addresses are unique
  },
  password: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: Date,
  },
  phoneNumber: {
    type: String,
  },
  address: {
    type: String,
  },
  // Add more user-related fields as needed

  isAccountLocked:{
    type: Boolean,
    default: false
  },


});

// Create the User model
const User = mongoose.model('User', userSchema);

module.exports = User;
