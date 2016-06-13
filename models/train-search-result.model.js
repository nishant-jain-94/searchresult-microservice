var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var trainSearchResultsSchema = mongoose.Schema({
    trainNo : String,
    Name : String,
    departure_time : Date,
    arrival_time : Date,
    duration : Date,
    Availability : String,
    price : String,
    departure_station : String,
    arrival_station : String
});

trainSearchResultsSchema.statics.getResults = function(criteria,cb){
  this.find(criteria,cb);
}

module.exports = mongoose.model('trainSearchResultSchema',trainSearchResultsSchema,'trainSearchResults');
