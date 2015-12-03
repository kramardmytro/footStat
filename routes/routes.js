var express = require('express'),
    router = express.Router(),
    mongoUtils = require('./../mongo/mongo');

/* GET home page. */
router.get('/', function(req, res) {
  res.sendFile('./public/index.html');
});

router.get('/soccerSeasons', function(req, res) {
    mongoUtils.getSoccerSeasons(req, res);
});

router.get('/soccerSeasons/:id/teams', function(req, res) {
    mongoUtils.getTeams(req, res);
});

router.get('/fixtures', function(req, res) {
    mongoUtils.getFixtures(req, res);
});

router.get('/teams', function(req, res) {
    mongoUtils.getTeams(req, res);
});

router.post('/login', function (req, res) {
    res.send({success: true, request: req.body});
});

//mongoUtils.updateFixtures();

module.exports = router;
