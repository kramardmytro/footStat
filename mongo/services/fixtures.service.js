var mongoose = require('mongoose'),
    path = require('path');

var schema = {
    fixtures: require('./../schemas/fixtures/fixtures')(mongoose)
};

function fixturesGET (data, response) {
    console.log('fixtureGET data', data);
    console.log('fixtureGET response', response);
    saveFixtures(data);
}

function saveFixtures (data) {
    var length = data.count,
        fixturesModel = mongoose.model('fixturesModel', schema.fixtures.fixtures);

    var fixtures = new fixturesModel(data);

    fixtures.save(function (err) {
        if (err) throw err;
    });
}

function fixtureGET (data, response) {
    console.log('fixtureGET data', data);
    console.log('fixtureGET response', response);
    saveFixture(data);
}

function saveFixture (data) {
    var length = data.length,
        fixtureModel = mongoose.model('fixtureModel', schema.fixtures.fixture);

    for (var i = 0; i < length; i++) {
        var fixture = new fixtureModel(data[i]);

        fixture.save(function (err) {
            if (err) throw err;
        });
    }
}

function getFixtures(res) {
    var fixturesModel = mongoose.model('fixturesModel', schema.fixtures.fixtures);

    fixturesModel.find(function (err, data) {
        if (err) throw err;

        console.log('getFixtures(res) data = ', data);
        res.send(data);
    })
}

function getFixture (req, res) {
    var fixtureModel = mongoose.model('fixtureModel', schema.fixtures.fixture);

    //TODO: implement mongodb query teams by fixtureId
    fixtureModel.find(function (err, data) {
        if (err) throw err;

        console.log('getFixture(res) data = ', data);
        res.send(data);
    })
}

function fixturesCallApi (Client, restApi) {

    return function () {
        var fixturesClient = new Client(),
            args = { headers: { "X-Response-Control": 'minified' }};
        var fixturesUrl = path.join(restApi.hostString, restApi.items.fixtures.uri);

        fixturesClient.get("http://api.football-data.org/v1/fixtures/", args, fixturesGET);

        // registering remote methods
        fixturesClient.registerMethod("jsonMethod", "http://api.football-data.org/v1/fixtures/", "GET");
        fixturesClient.methods.jsonMethod(function (data, response) {
            // parsed response body as js object
            console.log('fixturesCallApi data', data);
            // raw response
            console.log('fixturesCallApi response', response);
        });
    }
}

function fixtureCallApi (Client, restApi) {
    return function (fixtureId) {
        var fixtureClient = new Client(),
            args = { headers: { "X-Response-Control": 'minified' } },
            url = restApi.host + restApi.items.fixture.uri.replace('{id}',fixtureId);

        fixtureClient.get(url, args, fixtureGET);

        // registering remote methods
        fixtureClient.registerMethod("jsonMethod", url, "GET");
        fixtureClient.methods.jsonMethod(function (data, response) {
            // parsed response body as js object
            console.log('fixtureCallApi data', data);
            // raw response
            console.log('fixtureCallApi response', response);
        });
    }
}



module.exports = {
    fixture: {
        db: {
            getFixture: getFixture
        },
        callApi: fixtureCallApi
    },
    fixtures: {
        db: {
            getFixtures: getFixtures
        },
        callApi: fixturesCallApi
    }
};
