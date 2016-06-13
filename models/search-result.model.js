const mongoose = require('mongoose');
var Schema = mongoose.Schema;
var hotelSearchResult = require('./hotel-search-result.model');
var flightSearchResult = require('./flight-search-result.model');
var trainSearchResult = require('./train-search-result.model');

var searchResultSchema = new Schema({
   results: {
       type: Schema.Types.Mixed
   } 
});

searchResultSchema.statics.createSearchEntry = function(cb) {
  this.create({},cb);
};

searchResultSchema.statics.retrieveAccumulatedSearchResults = function(id,cb) {
    this.findById(id,cb);
}

searchResultSchema.getSearchResults = function(type,criteria,cb) {
  switch(type) {
      case 'flight': flightSearchResult.getResults(criteria,cb);
      case 'hotel': hotelSearchResult.getResults(criteria,cb)
      case 'localTravel': localTravelSearchResult.getResults(criteria,cb)
      case 'train': trainSearchResult.getResults(criteria,cb)
  }
};
module.exports = mongoose.model('searchResultSchema',searchResultSchema,'searchResults');