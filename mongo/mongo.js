var mongoose = require('mongoose');
var Client = require('node-rest-client').Client;
var soccerSeasonSchema = require('./schemas/soccerSeason')(mongoose);

var testRestApi = function() {
    var soccerSeasonsClient = new Client();
    
    var args = {
        headers: {"X-Response-Control": 'minified'}
    };

    soccerSeasonsClient.get("http://api.football-data.org/v1/soccerseasons", args, function (data, response) {
        // parsed response body as js object
        console.log('client.get data', data);
        createNewRecord(data);
        // raw response
        console.log('client.get response', response);
    });

    // registering remote methods
    soccerSeasonsClient.registerMethod("jsonMethod", "http://api.football-data.org/v1/soccerseasons", "GET");
    soccerSeasonsClient.methods.jsonMethod(function (data, response) {
        // parsed response body as js object
        console.log('jsonMethod data', data);
        // raw response
        console.log('jsonMethod response', response);
    });
};

var createNewRecord  = function (data) {
    var length = data.length,
        soccerSeasonsModel = mongoose.model('soccerSeasonsModel', soccerSeasonSchema);
    
    for (var i = 0; i < length; i++) {
        var season = new soccerSeasonsModel(data[i]);

        season.save(function (err) {
            if (err) throw err;
        });
    }
};

var getSoccerSeason = function(req, res) {
    var soccerSeasonsModel = mongoose.model('soccerSeasonsModel', soccerSeasonSchema);

    soccerSeasonsModel.find(function (err, data) {
        if (err) throw err;

        console.log('data', data);
        res.send(data);
    })
};


module.exports = {
    createNewRecord: createNewRecord,
    testRestApi: testRestApi,
    getSoccerSeason: getSoccerSeason
};
