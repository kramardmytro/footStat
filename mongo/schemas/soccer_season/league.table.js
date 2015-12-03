module.exports = function(mongoose) {

    function newStandingItem () {
        return new mongoose.Schema({
            "goals": Number,
            "goalsAgainst": Number,
            "wins": Number,
            "draws": Number,
            "losses": String
        });
    };

    var standingItemHome = newStandingItem(),
        standingItemAway = newStandingItem(),
        standingItem = new mongoose.Schema({
        "rank": Number,
        "team": String,
        "teamId": Number,
        "playedGames": Number,
        "crestURI": String,
        "points": Number,
        "goals": Number,
        "goalsAgainst": Number,
        "goalDifference": Number,
        "home": [ standingItemHome ],
        "away": [ standingItemAway ]
    });


    return new mongoose.Schema({
        "standing": [ standingItem ],
        "matchday": Number,
        "leagueCaption": String
    },{
        collection: 'leagueTable'
    });
};