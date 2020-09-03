// Import
const mongoose = require('mongoose');

// Schema
const CoffeeSchema = new mongoose.Schema({
    thumbnail: String,
    techs: [String],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

// Compiling schema into a model
module.exports = mongoose.model('Coffee', CoffeeSchema);