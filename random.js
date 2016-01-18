module.exports = function(callback) {
  var fs = require('fs');

  fs.readFile('random.txt', 'utf8', function(err, data) {

    callback(data.split(','));
  });

};