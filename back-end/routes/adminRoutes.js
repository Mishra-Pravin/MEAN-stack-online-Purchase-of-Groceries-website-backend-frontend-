const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

// Admin login
router.post('/admin/login', adminController.adminLogin);

// Define other admin routes as needed (e.g., dashboard actions)


router.get('/admin/dashboard', adminController.adminDashboard);
router.post('/admin/add-product', adminController.addProduct);
router.put('/admin/update-product/:id', adminController.updateProduct);
router.delete('/admin/delete-product/:id', adminController.deleteProduct);
router.get('/admin/view-requests', adminController.viewRequests);
router.post('/admin/add-employee', adminController.addEmployee);
router.delete('/admin/delete-employee/:id', adminController.deleteEmployee);
router.get('/admin/generate-reports', adminController.generateReports);
router.post('/admin/logout', adminController.logout);
module.exports = router;