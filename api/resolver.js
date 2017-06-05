var sync = require('synchronize');
var request = require('request');
var stockInfo = require('../utils/stock_funcs')

module.exports = function(req, res) {
  var term = req.query.text.trim();

  var symbolInfo
  if (term.substr(0,1) == '!')
  {
    symbolInfo = term.substr(1)
  }
  else
  {
    var symbols = stockInfo.GetStockInfo(term);
    if (symbols)
    {
      symbolInfo = symbols[0]
    }
    else
    {
      res.status(500).send('Error');
      return;
    }
  }

  matches = symbolInfo.match(/(\w* \[[\d.]+ )([+-]*[\d.]+ \([+-]*[\d.]+%\))(.*)/);

  var html = matches[1]
  html += "<u>"
  html += matches[2]
  html += '</u>'
  html += matches[3]

  res.json({
    body: html
  });
};
