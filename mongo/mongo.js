var Client = require('node-rest-client').Client;
var mongoose = require('mongoose');
var service = {
    soccerSeason: require('./services/soccer.season.service')
};

mongoose.connect('mongodb://admin:admin@ds053894.mongolab.com:53894/football');

function updateSoccerSeason () {
    var soccerSeasonsClient = new Client(),
        args = {
            headers: {"X-Response-Control": 'minified'}
        };

    soccerSeasonsClient.get("http://api.football-data.org/v1/soccerseasons", args, service.soccerSeason.GET.soccerSeason);

    // registering remote methods
    soccerSeasonsClient.registerMethod("jsonMethod", "http://api.football-data.org/v1/soccerseasons", "GET");
    soccerSeasonsClient.methods.jsonMethod(function (data, response) {
        // parsed response body as js object
        console.log('jsonMethod data', data);
        // raw response
        console.log('jsonMethod response', response);
    });
}

function updateTeams (soccerSeasonId) {
    var teamsClient = new Client(),
        args = {
            headers: {"X-Response-Control": 'minified'}
        },
        url = "http://api.football-data.org/v1/soccerseasons/" + soccerSeasonId + "/teams";

        teamsClient.get(url, args, service.soccerSeason.GET.teams);

        // registering remote methods
        teamsClient.registerMethod("jsonMethod", url, "GET");
        teamsClient.methods.jsonMethod(function (data, response) {
        // parsed response body as js object
        console.log('updateTeams data', data);
        // raw response
        console.log('updateTeams response', response);
    });
}

function getSoccerSeason (req, res) {
    var db = service.soccerSeason.db;

    db.getSoccerSeasons(res);
}
git commit -m "[ mongodb ] add schemas for soccer season dependencies"


module.exports = {
    updateSoccerSeason: updateSoccerSeason,
    updateTeams: updateTeams,
    getSoccerSeason: getSoccerSeason
};