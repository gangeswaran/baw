const express = require('express');
const mongoose = require('mongoose');
const Payment = require('../models/payment');

exports.payment = async (req, res) => {
    const {  cardNumber,
    cardHolderName,
    expirationDate,
    cvv } = req.body;

    try {
        const newPayment = new Payment({
            cardNumber,
    cardHolderName,
    expirationDate,
    cvv
        });

        const paymentPaid = await newPayment.save();

        res.status(201).json(paymentPaid);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Failed to pay' });
    }    
}