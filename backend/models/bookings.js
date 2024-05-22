const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    numberOfPeople: {
        type: Number,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    mobileNumber: {
        type: String,
        required: true
    }
});

const booking = mongoose.model('booking', bookingSchema);
module.exports = booking;
