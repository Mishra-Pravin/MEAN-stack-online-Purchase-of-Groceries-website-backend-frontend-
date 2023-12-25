const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');



// userRegistration 
router.post('/register',userController.registerUser);

// userLogin

router.post('/login',userController.signInUser);
router.post('/raise-ticket/:id', userController.raiseTicket);

module.exports = router