const express = require('express');
const app = express();
const port = 4000;
const endpoints = require('./router');

app.use(express.json());

// app.use(authentication);
app.use(endpoints);

app.use( (err, req, res, _next) => {
    console.error(err);

    const status = err.status || 500;
    const message = err.error || err.message || 'Internal Server Error';

    res.status(status).json({ error: message });
}
);

module.exports = app;



