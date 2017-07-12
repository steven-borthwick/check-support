var express = require('express')
var router = express.Router()

// add new routes here
var routes1 = require('./routes/routes_1');
var routes2 = require('./routes/routes_2');
var routes3 = require('./routes/routes_3');
var routes4 = require('./routes/routes_4');
var routes5 = require('./routes/routes_5');
var routes6 = require('./routes/routes_6');
var routes7 = require('./routes/routes_7');
var routes8 = require('./routes/routes_8');
var routes9 = require('./routes/routes_9');
var routes10 = require('./routes/routes_10');
var routes11 = require('./routes/routes_11');
var routes12 = require('./routes/routes_12');
var routes13 = require('./routes/routes_13');
var routes14 = require('./routes/routes_14');

// Route index page
router.use('/third_parties', routes1);
router.use('/third_partiesv2', routes2);
router.use('/third_partiesv3', routes3);
router.use('/volnicsv1', routes4);
router.use('/volnicsv2', routes5);
router.use('/volnicsv3', routes6);
router.use('/spa', routes7);
router.use('/volnicsv4', routes8);
router.use('/volnicsv5', routes9);
router.use('/volnicsv6', routes10);
router.use('/volnicsv7', routes11);
router.use('/volnicsv8', routes12);
router.use('/volnicsv9', routes13);
router.use('/volnicsv10', routes14);


module.exports = router