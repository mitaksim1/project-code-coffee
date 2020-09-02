// Imports
const express = require('express');
const connectDB = require('./DB/Connection.js');

const routes = require('./routes');

const app = express();

// Database connexion
connectDB();

app.use(express.json());

app.use(routes);

app.listen(3333);