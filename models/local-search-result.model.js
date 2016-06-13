var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var localSearchResultsSchema = mongoose.Schema({
    localNo : String,
    Name : String,
    departure_time : Date,
    arrival_time : Date,
    duration : Date,
    Availability : String,
    price : String,
    departure_station : String,
    arrival_station : String
});

localSearchResultsSchema.statics.getResults = function(criteria,cb){
  this.find(criteria,cb);
}

module.exports = mongoose.model('localSearchResultsSchema',localSearchResultsSchema,'localSearchResults');
