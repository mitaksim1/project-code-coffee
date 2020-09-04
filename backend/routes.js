// Imports
const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

// Import Controllers
const SessionController = require('./controllers/SessionController');
const CoffeeShopController = require('./controllers/CoffeeShopController');
const DashboardController = require('./controllers/DashboardController');
const BookingController = require('./controllers/BookingController');

// Routeur Express
const routes = express.Router();

// Multer
const upload = multer(uploadConfig);

routes.post('/sessions', SessionController.store);
routes.get('/coffees', CoffeeShopController.index);
routes.get('/dashboard', DashboardController.show);
routes.post('/coffees/:coffee_id/bookings', BookingController.store);

// Route to upload images
routes.post('/coffees', upload.single('thumbnail'), CoffeeShopController.store);

module.exports = routes;