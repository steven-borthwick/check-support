var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// add your routes here

module.exports = router

// enquiriesv5



router.get('/results_confirm2', function (req, res) {

  var search = req.query.search ? req.query.search.toLowerCase() : '';

  res.render('volnicsv23/results_confirm2', {
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
    res.render('volnicsv23/issue_address_customer')
  }
  
});

router.post('/forecast_QQ123456C', function (req, res) {

  var years = req.body.years
  var age = req.body.age;
  var month = req.body.month;
  console.log(years);
  console.log(age);
  console.log(month);
  res.render('volnicsv23/forecast_QQ123456C', {age: age, years: years, month: month,}) 
});

router.post('/forecast_DD678910C', function (req, res) {
  var years = req.body.years
  var age = req.body.age;
  console.log(years);
  console.log(age);
  res.render('volnicsv23/forecast_DD678910C', {age: age, years: years})
});

router.get('/ole_details', function (req, res) {

  var search = req.query.search ? req.query.search.toLowerCase() : '';

  res.render('volnicsv23/ole_details', {
    'search' : req.query.search,
    'LL074589A': search === 'll074589a',
    'LL081267C': search === 'll081267c',
    'FF123456C': search === 'ff123456c',
    'FF654321B': search === 'ff654321b',
    'NK678910D': search === 'nk678910d',
    'NT678910A': search === 'nt678910a',
    'ZZ345678A': search === 'zz345678a',
    'BG345678A': search === 'bg345678a'
  });
});




