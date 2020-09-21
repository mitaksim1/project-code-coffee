// Imports
const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');
const authMiddleware = require('./middleware/auth');

// Import Controllers
const SessionController = require('./controllers/SessionController');
const CoffeeEventController = require('./controllers/CoffeeEventController');
const DashboardController = require('./controllers/DashboardController');
const BookingController = require('./controllers/BookingController');

// Routeur Express
const routes = express.Router();

// Multer
const upload = multer(uploadConfig);

routes.post('/sessions', SessionController.store);
routes.post('/login', SessionController.login);
routes.get('/coffees',  CoffeeEventController.index);
routes.post('/coffees', authMiddleware, upload.single('thumbnail'), CoffeeEventController.store);
routes.get('/dashboard', authMiddleware, DashboardController.show);
routes.post('/coffees/:coffee_id/bookings', BookingController.store);

module.exports = routes;