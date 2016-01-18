var param = process.argv.slice(2);
var command = param[0];
var commandArg = param.slice(1).join(' ');
var tweets = require("./twitter.js");
var spotify = require("./spotify.js");
var movies = require("./movies.js");
var random = require("./random.js");
var log = require("./log.js");

decider(command, commandArg);

function decider(command, commandArg) {
  switch (command) {
    case 'my-tweets':
      tweets(function(data){
        log(data);
      });
      break;
    case 'spotify-this-song':
      spotify(commandArg, function(data){
        log(data);
      });
      break;
    case 'movie-this':
      movies(commandArg, function(data){
        log(data);
      });
      break;
    case 'do-what-it-says':
      random(function(data) {
        decider(data[0], data[1]);
      })
      break;
    default:
      console.log("Error. Invalid argument.");
      break;
  }
}