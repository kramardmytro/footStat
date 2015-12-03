var mongoose = require('mongoose'),
    schema = {
        teams: require('./../schemas/soccer_season/teams')(mongoose)
    };

function saveTeams (id, data, response) {
    var teamsModel = mongoose.model('teamsModel', schema.teams),
        teams;

    data.soccerSeasonId = Number(id);

    teams = new teamsModel(data);
    teams.save(function (err) {
        if (err) throw err;
    });
}

function teamsGET (id, data, response) {
    console.log('teamsGET data', data);
    console.log('teamsGET response', response);
    saveTeams(id, data);
}

function callApi (Client, restApi) {
    return function (req, res) {
        var id = req.param('id'),
            teamsClient = new Client(),
            args = { headers: { "X-Response-Control": 'minified' } },
            url = "http://api.football-data.org/v1/soccerseasons/{id}/teams".replace('{id}', id);

        teamsClient.get(url, args, function (data, response) { teamsGET(id, data, response) });

        // registering remote methods
        teamsClient.registerMethod("jsonMethod", url, "GET");
        teamsClient.methods.jsonMethod(function (data, response) {
            // parsed response body as js object
            console.log('updateTeams data', data);
            res.send(data);
            // raw response
            console.log('updateTeams response', response);
        });
    }
}

function getTeams (req, res) {
    var id = req.param('id'),
        teamsModel = mongoose.model('teamsModel', schema.teams);

    teamsModel.find({'soccerSeasonId': Number(id)}, function (err, data) {
        if (err) throw err;

        console.log('getTeams(res) data = ', data);
        res.send(data);
    })
}

module.exports = {
    callApi: callApi,
    db: {
        getTeams: getTeams
    }
};