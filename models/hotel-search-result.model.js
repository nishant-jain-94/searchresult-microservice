var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var hotelSearchResultsSchema = mongoose.Schema({
	name:String,
	location: String,
	rating: String,
	amenities:
  {
      iconCode: String,
      name:String
  },
	price: Number,
  imageUrl : String
});

hotelSearchResultsSchema.statics.getResults = function(criteria,cb){
  this.find(criteria,cb);
}

module.exports = mongoose.model('hotelSearchResultsSchema',hotelSearchResultsSchema,'hotelSearchResults');
