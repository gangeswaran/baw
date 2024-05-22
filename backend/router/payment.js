const express = require('express');
const PaymentRouter = express.Router();
const { payment } = require('../controller/payment_controller');

PaymentRouter.post('/payment',payment);

module.exports = PaymentRouter