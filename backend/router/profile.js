const express = require('express');
const ProfileRouter = express.Router();
const { getProfile, createProfile } = require('../controller/profile-controller');

// Route to get profile
ProfileRouter.get('/profile/:userId', getProfile);

// Route to create profile (if needed)
ProfileRouter.post('/profile', createProfile);

module.exports = ProfileRouter;
