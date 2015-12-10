var mongoose = require('mongoose');

var schema = {
    soccerSeason: require('./../schemas/soccer_season/soccer.season')(mongoose),
    leagueFixtures: require('./../schemas/soccer_season/league.fixtures')(mongoose),
    leagueTable: require('./../schemas/soccer_season/league.table')(mongoose)
};

function soccerSeasonsGET (data, response) {
    console.log('soccerSeasonsGET data', data);
    console.log('soccerSeasonsGET response', response);
    saveSoccerSeasons(data);
}

function saveSoccerSeasons (data) {
    var length = data.length,
        soccerSeasonsModel = mongoose.model('soccerSeasonsModel', schema.soccerSeason);

    for (var i = 0; i < length; i++) {
        var season = new soccerSeasonsModel(data[i]);

        season.save(function (err) {
            if (err) throw err;
        });
    }
}

function getSoccerSeasons(req, res) {
    var soccerSeasonsModel = mongoose.model('soccerSeasonsModel', schema.soccerSeason);

    soccerSeasonsModel.find(function (err, data) {
        if (err) throw err;

        console.log('getSoccerSeasons(res) data = ', data);
        res.send(data);
    })
}

function callApi (Client, restApi) {
    var url = restApi.host + restApi.items.soccerSeason;
    return function (request, response) {
        var soccerSeasonsClient = new Client(),
            args = { headers: { "X-Response-Control": 'minified' }};
            
        soccerSeasonsClient.get('http://api.football-data.org/v1/soccerseasons', args, function (data, response) { soccerSeasonsGET(data, response) });

        // registering remote methods
        soccerSeasonsClient.registerMethod("jsonMethod", url, "GET");
        soccerSeasonsClient.methods.jsonMethod(function (data, response) {
            // parsed response body as js object
            console.log('jsonMethod data', data);
            // raw response
            console.log('jsonMethod response', response);
        });
    }
}

module.exports = function(){
  return {
      GET: {
          soccerSeason: soccerSeasonsGET
      },
      db: {
          getSoccerSeasons: getSoccerSeasons
      },
      callApi: callApi
  }
}();
