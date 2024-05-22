const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
    img: {
        type: String,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
});

const Profile = mongoose.model('Profile', ProfileSchema);
module.exports = Profile;
