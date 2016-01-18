module.exports = function(data){
var fs = require('fs');
fs.appendFile('log.txt', data);
};