const express = require('express');
const mongoose = require('mongoose');
const booking = require('../models/bookings');

exports.booking = async (req, res) => {
    const { name, email, mobileNumber,
        startDate,
        endDate,
        numberOfPeople,
        idproof,
        addressproof } = req.body;

    try {
        const newBooking = new booking({
            name,
            email,
            mobileNumber,
            startDate,
            endDate,
            numberOfPeople,
            idproof,
            addressproof
        });

        const savedBooking = await newBooking.save();

        res.status(201).json(savedBooking);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Failed to create booking' });
    }    
}