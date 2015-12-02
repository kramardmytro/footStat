module.exports = function(mongoose) {
    var fixture = new mongoose.Schema({
        "id": Number,
        "soccerseasonId": Number,
        "date": String,
        "status": String,
        "matchday": Number,
        "homeTeamName": String,
        "homeTeamId": Number,
        "awayTeamName": String,
        "awayTeamId": Number,
        "result": {
            "goalsHomeTeam": Number,
            "goalsAwayTeam": Number
        }
    });

    var fixtures = new mongoose.Schema({
        "timeFrameStart": String,
        "timeFrameEnd": String,
        "count": Number,
        "fixtures": [ fixture ]
    },{
        collection: 'leagueFixtures'
    });

    return {
        fixture: fixture,
        fixtures: fixtures
    };
};