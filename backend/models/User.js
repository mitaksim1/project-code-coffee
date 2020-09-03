const mongoose = require('mongoose');

    const UserSchema = new mongoose.Schema({
        name: String,
        email: String,
        password: String
    });

// Compiling schema into a model
module.exports = mongoose.model('User', UserSchema);