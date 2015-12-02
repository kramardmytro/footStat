module.exports = function(mongoose) {
    return new mongoose.Schema({
        "id": Number,
        "numberOfGames": Number,
        "lastUpdated": String,
        "numberOfTeams": Number,
        "year": String,
        "league": String,
        "caption": String
    },{
        collection: 'soccerSeasons'
    });
};