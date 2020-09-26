const mongoose = require('mongoose');

const URI = process.env.MONGO_URI;

// Database connexion
const connectDB = async () => {
    await mongoose.connect(URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
    });

    console.log('database started...')
};

module.exports = connectDB;
