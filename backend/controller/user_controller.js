const express = require('express');
const mongoose = require('mongoose');
const User = require('../models/User');
const bcrypt = require('bcrypt');

exports.createUser = async (req, res, next) => {
    const { name, email, password } = req.body;

    try {
        const newUser = new User({
            name,
            email,
            password
        });

        const savedUser = await newUser.save();

        res.status(201).json(savedUser);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Failed to create user' });
    }
}


exports.loginUser = async (req, res, next) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email,password});
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
    
        const isPasswordValid = await user.email== email && user.password== password;

        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid password' });
        }

        res.status(200).json({message: 'Login successful'});
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Failed to login' });
    }
}
