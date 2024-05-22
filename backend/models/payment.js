const mongoose = require('mongoose');

const PaymentSchema = new mongoose.Schema({
    cardNumber: { 
        type: Number, required: true },
    cardHolderName: { type: String, required: true },
    expirationDate: { type: String, required: true },
    cvv: { type: String, required: true }
});

const Payment = mongoose.model('Payment', PaymentSchema);
module.exports = Payment;
