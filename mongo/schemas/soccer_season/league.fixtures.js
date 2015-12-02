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

    return new mongoose.Schema({
        "count": Number,
        "fixtures": [ fixture ]
    },{
        collection: 'leagueFixtures'
    });
};