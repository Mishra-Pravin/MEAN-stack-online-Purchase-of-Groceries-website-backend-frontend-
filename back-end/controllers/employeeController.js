const Employee = require('../models/Employee');

// Create a new employee
exports.createEmployee = async (req, res) => {
  try {
    const newEmployee = new Employee(req.body);
    const savedEmployee = await newEmployee.save();
    res.status(201).json(savedEmployee);
  } catch (error) {
    res.status(500).json({ error: 'Unable to create employee.' });
  }
};


// Employee login
exports.employeeLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const employee = await Employee.findOne({ email });
    if (!employee) {
      return res.status(404).json({ error: 'Employee not found.' });
    }

    // Check the password (you should hash and salt the password for security)
    if (employee.password !== password) {
      return res.status(401).json({ error: 'Invalid credentials.' });
    }

    // Successful login
    res.status(200).json({ message: 'Employee logged in successfully.' });
  } catch (error) {
    res.status(500).json({ error: 'Unable to log in.' });
  }
};

// Update employee profile by ID
exports.updateEmployee = async (req, res) => {
  const employeeId = req.params.id;
  const updatedEmployeeData = req.body;  // this line extract the data from database

  try {
    const updatedEmployee = await Employee.findByIdAndUpdate(
      employeeId,
      updatedEmployeeData,
      { new: true }
    );
    if (!updatedEmployee) {
      return res.status(404).json({ error: 'Employee not found.' });
    }
    res.status(200).json(updatedEmployee);
  } catch (error) {
    res.status(500).json({ error: 'Unable to update employee.' });
  }
};


// Delete employee by ID
exports.deleteEmployee = async (req, res) => {
  const employeeId = req.params.id;

  try {
    const deletedEmployee = await Employee.findByIdAndRemove(employeeId);
    if (!deletedEmployee) {
      return res.status(404).json({ error: 'Employee not found.' });
    }
    res.status(200).json({ message: 'Employee deleted successfully.' });
  } catch (error) {
    res.status(500).json({ error: 'Unable to delete employee.' });
  }
};