var express = require('express'),
    router = express.Router(),
    mongoUtils = require('./../mongo/mongo'),
    restApi = require('./rest.api');

/* GET home page. */
router.get('/', function(req, res) {
  res.sendFile('./public/index.html');
});

router.get('/soccerSeasons', function(req, res) {
    mongoUtils.getSoccerSeason(req, res);
});

router.post('/login', function (req, res) {
    res.send({success: true, request: req.body});
});

module.exports = router;
