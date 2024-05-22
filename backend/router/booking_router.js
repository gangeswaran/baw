const express = require('express');
const BookingsRouter = express.Router();
const {booking} = require('../controller/booking_controller');

BookingsRouter.post('/book',booking);

module.exports = BookingsRouter;