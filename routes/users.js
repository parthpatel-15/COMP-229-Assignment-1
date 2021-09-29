var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express', h1:'this is about my website heading' });
  res.send('hello all users>>>>>>>>>>>>>>>>>>>');
  
});

module.exports = router;
