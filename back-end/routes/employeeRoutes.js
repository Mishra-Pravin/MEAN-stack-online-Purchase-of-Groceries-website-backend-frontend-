const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employeeController');

// Create a new employee
router.post('/employees', employeeController.createEmployee);

// Employee login
router.post('/employees/login', employeeController.employeeLogin);

// Update employee profile by ID
router.put('/employees/:id', employeeController.updateEmployee);

// Delete employee by ID
router.delete('/employees/:id', employeeController.deleteEmployee);

module.exports = router;