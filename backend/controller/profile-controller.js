const Profile = require('../models/profile');

// Controller to get profile
exports.getProfile = async (req, res) => {
    const { userId } = req.params;
    try {
        const profile = await Profile.findOne({ user: userId }).populate('user');
        if (!profile) {
            return res.status(404).json({ message: 'Profile not found' });
        }
        res.status(200).json(profile);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Failed to get profile' });
    }
};

// Controller to create profile
exports.createProfile = async (req, res) => {
    const { img, user } = req.body;
    try {
        const profile = new Profile({
            img,
            user,
        });
        const savedProfile = await profile.save();
        res.status(201).json(savedProfile);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Failed to create profile' });
    }
};
