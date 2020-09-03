// Imports
const express = require('express');

// Import Controllers
const SessionController = require('./controllers/SessionController');
const CoffeeShopController = require('./controllers/CoffeeShopController');

// Appel du routeur d'Express
const routes = express.Router();

routes.post('/sessions', SessionController.store);
routes.get('/coffee', CoffeeShopController.index);


// Pour que l'appli ait accès à cette route on l'exporte
module.exports = routes;