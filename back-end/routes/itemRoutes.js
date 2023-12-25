const express = require('express');
const router = express.Router();        // This line fatch all the routes from router 


const itemsController = ('../controllers/itemController.js');





// Let's define some routes here 

// create a new item


// Create a new item
router.post('/items', itemsController.createItem);

// Get all items
router.get('/items', itemsController.getAllItems);

// Update an item by ID
router.put('/items/:id', itemsController.updateItem);

// Delete an item by ID
router.delete('/items/:id', itemsController.deleteItem);

module.exports=router;
