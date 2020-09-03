// Imports
const express = require('express');

// Import Controllers
const SessionController = require('./controllers/SessionController');

// Appel du routeur d'Express
const routes = express.Router();

routes.post('/sessions', SessionController.store);

    

// Pour que l'appli ait accès à cette route on l'exporte
module.exports = routes;