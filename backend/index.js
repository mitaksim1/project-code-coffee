// Imports
const express = require('express');

const app = express();

app.get('/', (request, response) => {
    return response.json({
        event: 'Code&Coffee',
        date: '02 septembre 2020'
    });
});

app.listen(3333);