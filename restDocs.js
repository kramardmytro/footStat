var soccerSeason = {
	url: '/v1/soccerseasons/',
	schema: {
        "id": Number,
        "caption": String,
        "league": String,
        "year": String,
        "numberOfTeams": Number,
        "numberOfGames": Number,
        "lastUpdated": String
    }
};

var team = {
	"count": Number,
	"teams": [
		{
			"name": String,
	      	"code": String,
	      	"shortName": String,
	      	"squadMarketValue": String,
	      	"crestUrl": String
		}
	]
};