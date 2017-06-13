const express = require('express');

let app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/users', (req, res) => {
    res.send([{
        name: 'Sarel',
        age: 17
    }, {
        name: 'Kobus',
        age: 30
    }, {
        name: 'Pieter',
        age: 22
    }])
});

app.get('/error', (req, res) => {
    res.status(404).send({
        error: 'Page not found.'
    });
});

app.listen(3000);

module.exports.app = app;