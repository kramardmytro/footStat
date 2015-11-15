var express = require('express');
var router = express.Router();
var mongoRoute = require('./mongo');

/* GET home page. */
router.get('/', function(req, res) {
  res.sendFile('./views/index.html');
});

router.get('/soccerSeason', function(req, res) {
    mongoRoute.getSoccerSeason(req, res);
});

module.exports = router;
