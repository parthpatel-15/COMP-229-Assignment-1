/* File name: index.js
     Student name: Parth Patel
     Student ID: 301207843
     date : 28th sept 2021   */

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home', h1:'this is about my website heading' });
});

router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home', h1:'this is about my website heading' });
});

/* GET about me page. */
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'about', h1:'this is about my website heading' });
});

/* GET product page. */
router.get('/project', function(req, res, next) {
  res.render('index', { title: 'project', h1:'this is about my website heading' });
});

/* GET service  page. */
router.get('/service', function(req, res, next) {
  res.render('index', { title: 'service', h1:'this is about my website heading' });
});


/* GET contact us page. */
router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'contact', h1:'this is about my website heading' });
});



module.exports = router;
