// Imports
const express = require('express');
const connectDB = require('./DB/Connection.js');
const cors = require('cors');
const path = require('path');
const morgan = require('morgan');

const routes = require('./routes');

const app = express();

// Database connexion
connectDB();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use('/files', express.static(path.resolve(__dirname, '.', 'uploads')));

app.use(routes);

app.listen(3333);