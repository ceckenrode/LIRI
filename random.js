//reads the random.txt file and sends the data back as an array to the liri.js file to be executed.
module.exports = function(callback) {
  var fs = require('fs');
  fs.readFile('random.txt', 'utf8', function(err, data) {
    callback(data.split(','));
  });
};