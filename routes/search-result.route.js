var express = require('express');
var router = express.Router();
var searchResult = require('../models/search-result.model.js');

/* GET users listing. */
router.get('/:id', function (req, res, next) {
  if (req.params.id)
    searchResult.retrieveAccumulatedSearchResults(req.params.id, function (err, data) {
      res.json(data);
    });
  else
    res.status(400);
});

//TODO: Have to avoid callback hell
router.post('/:searchType', function (req, res, next) {
  var searchType = req.params.searchType;
  if (req.body) {
    searchResult.createSearchEntry(function (err, data) {
      if (err) res.status(500);
      res.send(data._id);
      searchResult.getSearchResults(searchType,req.body,function(err,data) {
        searchResult.findByIdAndUpdate(data._id,{ $set: { results:data } });
      });
    });
  }
  res.status(400);
});

module.exports = router;