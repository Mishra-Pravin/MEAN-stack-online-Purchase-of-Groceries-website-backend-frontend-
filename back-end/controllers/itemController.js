const Item = require('../models/Item');

// create a new Item 

// Create a new item
exports.createItem = async (req, res) => {
    try {
      const newItem = new Item(req.body);
      const savedItem = await newItem.save();
      res.status(201).json(savedItem);

      console.log(`${savedItem}  and also ${newItem}`);


    } catch (error) {
      res.status(500).json({ error: 'Unable to create item.' });
    }
  };



//   get all the Items 

exports.getAllItems = async (req,res) => {
    try{
        const items = await Item.find();

        res.status(200).json(items);
        console.log(`${items} find this much only`);
    }catch (error){
        res.status(500).json({error:'Unable to retrieve items.'})

    }
};
// Update an item by ID
exports.updateItem = async (req, res) => {
    const itemId = req.params.id;
    const updatedItemData = req.body;
  
    try {
      const updatedItem = await Item.findByIdAndUpdate(itemId, updatedItemData, { new: true });
      if (!updatedItem) {
        return res.status(404).json({ error: 'Item not found.' });
      }
      res.status(200).json(updatedItem);
    } catch (error) {
      res.status(500).json({ error: 'Unable to update item.' });
    }
};
  


