var Client = require('node-rest-client').Client;
var mongoose = require('mongoose');
var restApi = require('./../rest_api/rest.api.js');

var service = {
    soccerSeasons: require('./services/soccer.season.service'),
    fixtures: require('./services/fixtures.service'),
    teams: require('./services/teams.service')
};

//mongoose.connect('mongodb://admin:admin@ds053894.mongolab.com:53894/football');
mongoose.connect('mongodb://developer:footstat_developer@ds027739.mongolab.com:27739/footstat');

var update = {
    soccerSeasons: service.soccerSeasons.callApi(Client, restApi),
    fixture: service.fixtures.fixture.callApi(Client, restApi),
    fixtures: service.fixtures.fixtures.callApi(Client, restApi),
    teams: service.teams.callApi(Client, restApi)
};

var get = {
    soccerSeasons: service.soccerSeasons.db.getSoccerSeasons,
    teams: service.teams.db.getTeams,
    fixture: service.fixtures.fixture.db.getFixture,
    fixtures: service.fixtures.fixtures.db.getFixtures
};


module.exports = {
    updateSoccerSeasons: update.soccerSeasons,
    updateTeams: update.teams,
    updateFixture: update.fixture,
    updateFixtures: update.fixtures,

    getSoccerSeasons: get.soccerSeasons,
    getTeams: get.teams,
    getFixture: get.fixture,
    getFixtures: get.fixtures
};