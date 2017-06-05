var sync = require('synchronize');
var request = require('request');
var _ = require('underscore');
var stockInfo = require('../utils/stock_funcs')

// The Type Ahead API.
module.exports = function(req, res) {
  var term = req.query.text.trim();
  if (!term) {
    res.json([{
      title: '<i>(Please enter a search term.)</i>',
      text: ''
    }]);
    return;
  }

  var symbols = stockInfo.GetStockInfo(term);

  var results = _.chain(symbols)
    .map(function(symbolInfo) {
      return {
        title: symbolInfo,
        text: '!' + symbolInfo
      };
    })
    .value();

  if (results.length === 0) {
    res.json([{
      title: '<i>(No results found.)</i>',
      text: ''
    }]);
  } else {
    res.json(results);
  }
};
