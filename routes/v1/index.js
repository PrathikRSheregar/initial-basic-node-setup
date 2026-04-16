const express = require('express');
const routes = express.Router();

const infoRoutes = require('./info');

routes.use('/', infoRoutes);

module.exports = routes;