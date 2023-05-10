const express = require('express');
const router = express.Router();
const accountRoutes = require('./countries.js');
router.use(accountRoutes);

module.exports = router;
