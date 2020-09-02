const mongoose = require('mongoose');

const URI = 'mongodb+srv://codeCoffee:codeCoffee@cluster0.bjab1.mongodb.net/code?retryWrites=true&w=majority';

// Database connexion
const connectDB = async () => {
    await mongoose.connect(URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });
    console.log('db connected');
};

module.exports = connectDB;