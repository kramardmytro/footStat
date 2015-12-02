var mongoose = require('mongoose');

var schema = {
    soccerSeason: require('./../schemas/soccer_season/soccer.season')(mongoose),
    leagueFixturesSchema: require('./../schemas/soccer_season/league.fixtures')(mongoose),
    legueTableSchema: require('./../schemas/soccer_season/league.table')(mongoose),
    teamsSchema: require('./../schemas/soccer_season/teams')(mongoose)
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

function teamsGET (data, response) {
    console.log('soccerSeasonsGET data', data);
    console.log('soccerSeasonsGET response', response);
    saveTeams(data);
}

function saveTeams (data) {
//    TODO:
}

function getSoccerSeasons(res) {
    var soccerSeasonsModel = mongoose.model('soccerSeasonsModel', schema.soccerSeason);

    soccerSeasonsModel.find(function (err, data) {
        if (err) throw err;

        console.log('data', data);
        res.send(data);
    })
}



module.exports = function(){
  return {
      GET: {
          soccerSeason: soccerSeasonsGET,
          teams: teamsGET
      },
      db: {
          getSoccerSeasons: getSoccerSeasons
      }
  }
};




