(function(window){
    var utils = {};

    utils.clickOnTheButton = function(e) {
            var oReq = new XMLHttpRequest();
            oReq.onload = function (e) {
                var responseText = JSON.parse(e.target.responseText);
                console.log('responseText', responseText);
            };
            oReq.open('GET', 'soccerSeason', true);
            oReq.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
            oReq.send();
    };

    window.utils = utils;
})(window);