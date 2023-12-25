
const Admin = require('../models/admin');

// Admin login
exports.adminLogin = async (req, res) => {
  const { username, password } = req.body;

  try {
    const admin = await Admin.findOne({ username });
    if (!admin) {
      return res.status(404).json({ error: 'Admin not found.' });
    }

    // Check the password (you should hash and salt the password for security)
    if (admin.password !== password) {
      return res.status(401).json({ error: 'Invalid credentials.' });
    }

    // Successful login
    res.status(200).json({ message: 'Admin logged in successfully.' });
  } catch (error) {
    res.status(500).json({ error: 'Unable to log in.' });
  }
};

// Define other admin controller functions for dashboard actions as needed

exports.adminDashboard = async (req,res) => {
  // Here, you can render the admin dashboard or return a JSON response based on your frontend architecture
  res.status(200).json({
    message: 'Admin dashboard oprations',
    operations: [
      'Add products',
      'Update products',
      'Delete products',
      'View Requests',
      'Add employee',
      'Delete Employee',
      'Generate Reports',
      'Logout',
    ],
  })
}


exports.addProduct = async (req, res) => {
  try {
    // Extract product details from the request body
    const { name, price, quantity } = req.body;

    // Create a new product
    const newProduct = new Product({
      name,
      price,
      quantity,
    });

    // Save the product to the database
    await newProduct.save();

    // Respond with a success message
    res.status(200).json({ message: 'Product added successfully.' });
  } catch (error) {
    // Handle errors and respond with an error message
    res.status(500).json({ error: 'Unable to add product.' });
  }
};



exports.updateProduct = async (req, res) => {
  try {
    // Extract product details from the request body
    const { productId, price, quantity } = req.body;

    // Find the product by ID and update its details
    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      { price, quantity },
      { new: true } // Return the updated product
    );

    // Respond with the updated product
    res.status(200).json({ message: 'Product updated successfully.', updatedProduct });
  } catch (error) {
    // Handle errors and respond with an error message
    res.status(500).json({ error: 'Unable to update product.' });
  }
};

// Delete products
exports.deleteProduct = async (req, res) => {
  try {
    // Extract product ID from the request parameters
    const productId = req.params.id;

    // Find the product by ID and delete it
    await Product.findByIdAndRemove(productId);

    // Respond with a success message
    res.status(200).json({ message: 'Product deleted successfully.' });
  } catch (error) {
    // Handle errors and respond with an error message
    res.status(500).json({ error: 'Unable to delete product.' });
  }
};



// View Requests
exports.viewRequests = async (req, res) => {
  try {
    // Fetch requests from employees (assuming you have a requests model)
    const requests = await Requests.find();

    // Respond with the list of requests
    res.status(200).json({ requests });
  } catch (error) {
    // Handle errors and respond with an error message
    res.status(500).json({ error: 'Unable to fetch requests.' });
  }
};


// Add employee
exports.addEmployee = async (req, res) => {
  try {
    // Extract employee details from the request body
    const { firstName, lastName, email } = req.body;

    // Create a new employee with a generic password
    const newEmployee = new Employee({
      firstName,
      lastName,
      email,
      password: 'welcome123', // A generic password, should be changed on the first login
    });

    // Save the employee to the database
    await newEmployee.save();

    // Respond with a success message
    res.status(200).json({ message: 'Employee added successfully.' });
  } catch (error) {
    // Handle errors and respond with an error message
    res.status(500).json({ error: 'Unable to add employee.' });
  }
};

// Delete Employee
exports.deleteEmployee = async (req, res) => {
  try {
    // Extract employee ID from the request parameters
    const employeeId = req.params.id;

    // Find the employee by ID and delete it
    await Employee.findByIdAndRemove(employeeId);

    // Respond with a success message
    res.status(200).json({ message: 'Employee deleted successfully.' });
  } catch (error) {
    // Handle errors and respond with an error message
    res.status(500).json({ error: 'Unable to delete employee.' });
  }
};

// Generate Reports
exports.generateReports = async (req, res) => {
  try {
    // Fetch and generate reports as needed
    // For simplicity, let's assume you have a Reports model
    const reports = await Reports.find();

    // Respond with the list of reports
    res.status(200).json({ reports });
  } catch (error) {
    // Handle errors and respond with an error message
    res.status(500).json({ error: 'Unable to generate reports.' });
  }
};

// Logout
exports.logout = async (req, res) => {
  // Implement the logout logic based on your authentication mechanism
  res.status(200).json({ message: 'Logout successful.' });
};