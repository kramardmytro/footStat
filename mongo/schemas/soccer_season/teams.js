module.exports = function(mongoose) {
    var team = new mongoose.Schema({
        "id": Number,
        "name": String,
        "code": String,
        "shortName": String,
        "squadMarketValue": String,
        "crestUrl": String
    });

    return new mongoose.Schema({
        "count": Number,
        "teams": [ team ]
    },{
        collection: 'teams'
    });
};