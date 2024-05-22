const Place = require('../models/Place');
// Controller for creating a new place
exports.placeLoad = async (req, res) => {
    const { name, image, price, description } = req.body;

    try {
        const newPlace = new Place({
            name,
            image,
            price,
            description
        });

        const savedPlace = await newPlace.save();

        res.status(201).json(savedPlace);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Failed to create place' });
    }
};

// Controller for fetching all places
exports.getPlaces = async (req, res) => {
    try {
        const places = await Place.find();
        res.status(200).json(places);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Failed to get places' });
    }
};

// Controller for fetching a specific place by KEYWORD
// Controller for fetching places by keyword
exports.getPlace = async (req, res) => {
    const { keyword } = req.query; // Get the keyword from the query parameters

    try {
        let places;

        if (keyword) {
            // If a keyword is provided, perform a search using MongoDB's $regex operator
            places = await Place.find({
                $or: [
                    { name: { $regex: keyword, $options: 'i' } }
                ]
            });
        } else {
            // If no keyword is provided, fetch all places
            places = await Place.find(places);
        }

        res.status(200).json(places);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Failed to get places' });
    }
};

