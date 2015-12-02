var statusJson = {
    soccerSeasons: require('./json/soccer_seasons.json'),
    teams: require('./json/teams.json')
};

function getJsonFile (url) {
    console.log('getJsonFile(url) url = ');
//    TODO: implement select right json file from rest_api_status folder for urls
}

function parseJson (jsonFile) {
    console.log('parseJson(jsonFile) json = ', jsonFile);
//    TODO: implement parsing json file from rest_api_status folder to the object
}

function  isExistInJson (url) {
    var jsonFile = getJsonFile(url),
        jsonObj = parseJson(jsonFile);

    console.log('isExistInJson(url) jsonFile = ', jsonObj);
//    TODO: implement checking for existing url in json
}

function isExist (url) {
    var isExistInJson = isExistInJson(url);
    //    TODO: implement checking for existing records in db
}