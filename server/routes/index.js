var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Texas-Hold-em-Poker-server' });
});

module.exports = router;
