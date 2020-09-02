const express = require('express');

// Appel du routeur d'Express
const routes = express.Router();

routes.get('/users', (request, response) => {

    return response.json({
        event: 'Code&Coffee',
        name: 'Miriam'
    });
});

// Pour que l'appli ait accès à cette route on l'exporte
module.exports = routes;