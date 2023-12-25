
const mongoose = require('mongoose');
const itemSchema = new mongoose.Schema({
    name:String,
    price:Number,
    quantity:Number,
    image:{
        data:Buffer,//image data
        contentType:String,//MIME type of the file
    },


})


const Item = mongoose.model('Item',itemSchema);

module.exports = Item;