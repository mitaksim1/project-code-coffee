require('dotenv').config();

// Imports
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const { resolve } = require('path');

const routes = require('./routes');

const database = require('./database');

const app = express();

const uploadConfig = require('./config/upload');

// Database connexion
database();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use('/files', express.static(uploadConfig.uploadFolder));

app.use(routes);

app.listen(3333, () => {
  console.log('Started backend...');
});
