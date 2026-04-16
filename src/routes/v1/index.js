const express = require('express');
const router = express.Router();

const infoRoutes = require('./info');

router.use('/', infoRoutes);

module.exports = router;