var Client = require('node-rest-client').Client;
var mongoose = require('mongoose');
var restApi = require('./../rest_api/rest.api.js');

var service = {
    soccerSeason: require('./services/soccer.season.service'),
    fixtures: require('./services/fixtures.service')
};

mongoose.connect('mongodb://admin:admin@ds053894.mongolab.com:53894/football');

var update = {
    soccerSeason: function () {
        var soccerSeasonsClient = new Client(),
            args = { headers: { "X-Response-Control": 'minified' }},
            url = restApi.host + restApi.items.soccerSeason;

        soccerSeasonsClient.get(url, args, service.soccerSeason.GET.soccerSeason);

        // registering remote methods
        soccerSeasonsClient.registerMethod("jsonMethod", url, "GET");
        soccerSeasonsClient.methods.jsonMethod(function (data, response) {
            // parsed response body as js object
            console.log('jsonMethod data', data);
            // raw response
            console.log('jsonMethod response', response);
        });
    },
    fixture: service.fixtures.fixture.callApi(Client, restApi),
    fixtures: service.fixtures.fixtures.callApi(Client, restApi),
    teams: function (teamId) {
        var teamsClient = new Client(),
            args = { headers: { "X-Response-Control": 'minified' } },
            url = restApi.host + restApi.items.teams.replace('{id}',teamId);

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
};

var get = {
    soccerSeason: function (req, res) {
        var db = service.soccerSeason.db;

        db.getSoccerSeasons(res);
    },
    teams: function (req, res) {
        var db = service.soccerSeason.db;

        db.getTeams(req, res);
    },
    fixture: service.fixtures.fixture.db.getFixture,
    fixtures: service.fixtures.fixtures.db.getFixtures
};


module.exports = {
    updateSoccerSeason: update.soccerSeason,
    updateTeams: update.teams,
    updateFixture: update.fixture,
    updateFixtures: update.fixtures,

    getSoccerSeason: get.soccerSeason,
    getTeams: get.teams,
    getFixture: get.fixture,
    getFixtures: get.fixtures
};