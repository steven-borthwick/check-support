var express = require('express')
var router = express.Router()

// add new routes here
var routes1 = require('./routes/routes_1');
var routes2 = require('./routes/routes_2');

// Route index page
router.use('/sprint-1', routes1);
router.use('/sprint-2', routes2);

module.exports = router