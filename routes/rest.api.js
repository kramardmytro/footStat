var host = "http://api.football-data.org";

var soccerSeason = {
    uri: "/v1/soccerseasons"
};

var teams = {
    uri: "/v1/soccerseasons/{id}/teams"
};

var team = {
    uri: "/v1/teams/{id}"
};

var players = {
    uri: "/v1/teams/{id}/players"
};

var leagueTable = {
    uri: "/v1/soccerseasons/{id}/leagueTable"
};

var leagueFixtures = {
    uri: "/v1/soccerseasons/{id}/fixtures"
};

var fixtures = {
    uri: "v1/fixtures/"
};

var fixture = {
    uri: "/v1/fixtures/{id}"
};

var teamFixtures = {
    uri: '/v1/teams/{id}/fixtures'
};

var items = [ soccerSeason, teams, team, players, leagueTable, leagueFixtures, fixtures, fixture, teamFixtures ];

module.exports = {
    host:  host,
    items: items
};