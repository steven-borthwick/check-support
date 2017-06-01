var express = require('express')
var router = express.Router()

// add new routes here
var routes1 = require('./routes/routes_1');
var routes2 = require('./routes/routes_2');
var routes3 = require('./routes/routes_3');

// Route index page
router.use('/third_parties', routes1);
router.use('/third_partiesv2', routes2);
router.use('/third_partiesv3', routes3);

module.exports = router