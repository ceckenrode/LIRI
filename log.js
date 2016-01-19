//logs the passed data to the log.txt file using the fs.appendFile function
module.exports = function(data) {
  var fs = require('fs');
  fs.appendFile('log.txt', data);
};