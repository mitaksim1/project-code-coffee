const mongoose = require('mongoose');

// Table
const BookingSchema = new mongoose.Schema({
    date: { type: Date, default: Date.now },
    approved: Boolean,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    coffee: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Coffee'
    }
});

module.exports = mongoose.model('Booking', BookingSchema);