var mongoose = require('mongoose');
var Client = require('node-rest-client').Client;
var Schema = mongoose.Schema;


function testRestApi () {
    var soccerSeasons = new Client();
    
    var args = {
        headers: {"X-Response-Control": 'minified'}
    };
    
    soccerSeasons.get("http://api.football-data.org/v1/soccerseasons", args, function (data, response) {
        // parsed response body as js object
        console.log('client.get data', data);
        createNewRecord(data);
        // raw response
        console.log('client.get response', response);
    });

    // registering remote methods
    soccerSeasons.registerMethod("jsonMethod", "http://api.football-data.org/v1/soccerseasons", "GET");
    soccerSeasons.methods.jsonMethod(function (data, response) {
        // parsed response body as js object
        console.log('jsonMethod data', data);
        // raw response
        console.log('jsonMethod response', response);
    });
};

//{

//},
//    "caption": "1. Bundesliga 2015\/16",
//    "league": "BL1",
//    "year": "2015",
//    "numberOfTeams": 18,
//    "numberOfGames": 306,
//    "lastUpdated": "2015-11-08T18:35:19Z"
//}


var createNewRecord  = function (data) {
    var seasons;
    var length = data.length;
    var soccerSeasons = new Schema({
        "id": Number,
        "caption": String,
        "league": String,
        "year": String,
        numberOfTeams: Number,
        numberOfGames: Number,
        lastUpdated: String
    }, {collection: 'soccerSeasons'});
    
    var soccerSeasonsModel = mongoose.model('soccerSeasonsModel', soccerSeasons);
    
    for (var i = 0; i < length; i++) {
        var item = data[i];
        var season = new soccerSeasonsModel(data[i]);
        season.save(function (err) {
            if (err) throw err;
        });
    };
    
    //console.log("createNewRecord: ");
    //seasons = new soccerSeasonsModel({
    //    name: 'SeasonName-mock'
    //});
    //seasons.save(function (err) {
    //    if (!err) {
    //        return console.log("created");
    //        seasons.save();
    //    } else {
    //        return console.log(err);
    //    }
    //});
};


var createCollection = function (connection) {
    mongoose.connection.db.collection('newCollection', function (err, collection) {
        if (err) throw err;
        
        collection.find().toArray(function () {
            console.log('callback', arguments);
        });
    });
    
};

module.exports.createNew = testRestApi;
module.exports.createCollection = createCollection;