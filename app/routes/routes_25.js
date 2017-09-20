var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// add your routes here

module.exports = router

// enquiriesv5



router.get('/ole_details', function (req, res) {

  var search = req.query.search ? req.query.search.toLowerCase() : '';

  res.render('overseasv1/ole_details', {
    'search' : req.query.search,
    'QQ123456C': search === 'qq123456c',
    'DD678910C': search === 'dd678910c',
    'FF123456C': search === 'ff123456c',
    'FF654321B': search === 'ff654321b',
    'NK678910D': search === 'nk678910d',
    'NT678910A': search === 'nt678910a',
    'ZZ345678A': search === 'zz345678a',
    'BG345678A': search === 'bg345678a'
  });
});

router.get('/results_confirm2', function (req, res) {

  var search = req.query.search ? req.query.search.toLowerCase() : '';

  res.render('overseasv1/results_confirm2', {
    'search' : req.query.search,
    'QQ123456C': search === 'qq123456c',
    'DD678910C': search === 'dd678910c',
    'FF123456C': search === 'ff123456c',
    'FF654321B': search === 'ff654321b',
    'NK678910D': search === 'nk678910d',
    'NT678910A': search === 'nt678910a',
    'ZZ345678A': search === 'zz345678a',
    'BG345678A': search === 'bg345678a'
  });
});


// Branching

router.get('/issue_address_customer', function (req, res) {
  var thirdparties = req.query.thirdparties

  if (thirdparties === 'Third party') {
    res.redirect('issue_address_third_party')
  } else {   
    res.render('overseasv1/issue_address_customer')
  }
  
})

router.post('/forecast_QQ123456C', function (req, res) {
  var years = req.body.years

  res.render('overseasv1/forecast_QQ123456C', {years: years})
})
