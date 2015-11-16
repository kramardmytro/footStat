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

var teams = {
	url: '/v1/soccerseasons/{id}/teams',
	schema: {
		"count": Number,
		"teams": [
			{
				"id": Number,
				"name": String,
				"code": String,
				"shortName": String,
				"squadMarketValue": String,
				"crestUrl": String
			}
		]
	}
};

var team2 = {
	url: '/v1/teams/{id}',
	schema: {
		"id": Number,
		"name": String,
		"code": String,
		"shortName": String,
		"squadMarketValue": String,
		"crestUrl": String
	}
};

var leagueTable = {
	url: '/v1/soccerseasons/{id}/leagueTable',
	schema: {
		"leagueCaption": String,
		"matchday": Number,
		"standing":[
			{
				"rank": Number,
	            "team": String,
	            "teamId": Number,
	            "playedGames": Number,
	            "crestURI": String,
	            "points": Number,
	            "goals": Number,
	            "goalsAgainst": Number,
	            "goalDifference": Number,
        		"home": [
					{
						"goals": ​Number,
						"goalsAgainst": Number,
						"wins": ​Number,
						"draws": ​Number,
						"losses": ​Number
					}
				],
				"away": [
					{
						"goals": ​Number,
						"goalsAgainst": Number,
						"wins": ​Number,
						"draws": ​Number,
						"losses": ​Number
					}
				]
			}
		]
	}
};

var fixture1 = {
	url: '/v1/soccerseasons/{id}/fixtures',
	schema: {
	    "count": Number,
	    "fixtures":
    	[
        	{
            "id": Number,
            "soccerseasonId": Number,
            "date": String,
            "status": String,
            "matchday": Number,
            "homeTeamName": String,
            "homeTeamId": Number,
            "awayTeamName": String,
            "awayTeamId": Number,
            "result":
            {
                "goalsHomeTeam": Number,
                "goalsAwayTeam": Number
            }
        }
    ]
	}
};

var fixture2 = {
	url: '/v1/fixtures/',
	schema: {
	    "timeFrameStart": String,
	    "timeFrameEnd": String,
	    "count": Number,
	    "fixtures":
	    [
	        {
            "id": Number,
            "soccerseasonId": Number,
            "date": String,
            "status": String,
            "matchday": Number,
            "homeTeamName": String,
            "homeTeamId": Number,
            "awayTeamName": String,
            "awayTeamId": Number,
            "result":
            {
                "goalsHomeTeam": Number,
                "goalsAwayTeam": Number
            }
        }
    ]
	}
};

var fixture3 = {
	url: '/v1/fixtures/{id}',
	schema: {
	    "fixtures":
    	[
        	{
            "id": Number,
            "soccerseasonId": Number,
            "date": String,
            "status": String,
            "matchday": Number,
            "homeTeamName": String,
            "homeTeamId": Number,
            "awayTeamName": String,
            "awayTeamId": Number,
            "result":
            {
                "goalsHomeTeam": Number,
                "goalsAwayTeam": Number
            }
        }
    ]
	}
};

var fixture4 = {
	url: '/v1/teams/{id}/fixtures/',
	schema: {
		"timeFrameStart": String,
	    "timeFrameEnd": String,
	    "count": Number,
	    "fixtures":
    	[
        	{
            "id": Number,
            "soccerseasonId": Number,
            "date": String,
            "status": String,
            "matchday": Number,
            "homeTeamName": String,
            "homeTeamId": Number,
            "awayTeamName": String,
            "awayTeamId": Number,
            "result":
	            {
	                "goalsHomeTeam": Number,
	                "goalsAwayTeam": Number
	            }
        	}
    ]
	}
};

var player = {
	url: '/v1/teams/{id}/players',
	schema: {
		"count": Number,
    	"players":
    	[
            {
            "id": Number,
            "name": String,
            "position": String,
            "jerseyNumber": Number,
            "dateOfBirth": String,
            "nationality": String,
            "contractUntil": String,
            "marketValue": String
            }
    	]
	}
}