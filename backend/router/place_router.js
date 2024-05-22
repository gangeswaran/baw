const express = require('express');
const PlacesRouter = express.Router();
const {placeLoad, getPlace, getPlaces} = require('../controller/place_controller');

PlacesRouter.post('/place',placeLoad);
PlacesRouter.get('/getplace',getPlace);
PlacesRouter.get('/getplaces',getPlaces);

module.exports = PlacesRouter;