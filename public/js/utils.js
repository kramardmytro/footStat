(function(window){
    var utils = {};

    utils.getSoccerSeasons = function() {
        var oReq = new XMLHttpRequest();

        oReq.onload = function (e) {
            var responseText = JSON.parse(e.target.responseText);
            console.log('getSoccerSeasons, response =>', responseText);
        };
        oReq.open('GET', 'soccerSeasons', true);
        oReq.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
        oReq.send();
    };

    utils.getFixtures = function () {
        var oReq = new XMLHttpRequest();

        oReq.onload = function (e) {
            var responseText = JSON.parse(e.target.responseText);
            console.log('utils.getFixtures, response =>', responseText);
        };
        oReq.open('GET', 'fixtures', true);
        oReq.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
        oReq.send();
    };

    utils.getTeams = function () {
        var id = document.getElementById('getTeamsField').value,
            oReq = new XMLHttpRequest();

        if (!id) {
            console.log('utils.getTeams id is not found');
            return
        }

        oReq.onload = function (e) {
            var responseText = JSON.parse(e.target.responseText);
            console.log('utils.getTeams() response =>', responseText);
        };
        oReq.open('GET', 'soccerSeasons/' + id + '/teams', true);
        oReq.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
        oReq.send();
    };

    window.utils = utils;
})(window);