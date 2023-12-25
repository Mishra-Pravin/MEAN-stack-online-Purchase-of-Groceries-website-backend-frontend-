const mongoose = require('mongoose');

const dbURI = 'mongodb+srv://demo:node1234@cluster0.sgqsh1o.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(dbURI,{ useNewUrlParser: true, useUnifiedTopology: true });


//checking for connection

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

db.once('open',()=>{
    console.log("Connected to MongoDB Atlas");
}) 