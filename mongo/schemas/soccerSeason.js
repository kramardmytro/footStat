module.exports = function(mongoose) {
    return new mongoose.Schema({
        "id": Number,
        "caption": String,
        "league": String,
        "year": String,
        "numberOfTeams": Number,
        "numberOfGames": Number,
        "lastUpdated": String
    },{
        collection: 'soccerSeasons'
    });
};