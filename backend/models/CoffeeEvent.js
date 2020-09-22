// Import
const mongoose = require('mongoose');

// Schema
const CoffeeSchema = new mongoose.Schema({
    date: String,
    thumbnail: String,
    company: String,
    techs: [String],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    toJSON: {
        virtual: true, // à chaque fois q'un spot est converti en json, il faut calculer les virtuals automatiquement
    }
});

// Partie crée au moment d'ahouter les photos dans le dashboard frontend
CoffeeSchema.virtual('thumbnail_url').get(function() {
    return `http://localhost:3333/files$(this.thumbnail)`
});

// Compiling schema into a model
module.exports = mongoose.model('Coffee', CoffeeSchema);