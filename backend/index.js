// Imports
const express = require('express');
const connectDB = require('./DB/Connection.js');
const cors = require('cors');

const routes = require('./routes');

const app = express();

// Database connexion
connectDB();

app.use(cors());

app.use(express.json());

app.use(routes);

app.listen(3333);