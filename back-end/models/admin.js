const mongoose = require('mongoose');

// Define the Admin schema
const adminSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true, // Ensure that usernames are unique
  },
  password: {
    type: String,
    required: true,
  },
  // Add more admin-related fields as needed
});

// Create the Admin model
const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;