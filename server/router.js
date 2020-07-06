const express = require('express');
const Router = express.Router();

Router.get('/', (req, res, next) => {
    res.send('server is up and running!!').status(200);
})

module.exports = Router;