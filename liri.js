//param contains the user arguments passed after node liri.js
//command holds the function, ie spotify-this-song
//commandArg holds the argument for that function, ie. "What's my Age Again?"
var param = process.argv.slice(2);
var command = param[0];
var commandArg = param.slice(1).join(' ');
var tweets = require("./twitter.js");
var spotify = require("./spotify.js");
var movies = require("./movies.js");
var random = require("./random.js");
var log = require("./log.js");
var divider = "------------------------------------\
---------------------------------------------------------------------------------------------------\n"

decider(command, commandArg);
//decider is a switch case stored in a function that checks for matching functions and 
//arguments passed, executes them, and logs the data from these functions in the log.txt file.
function decider(command, commandArg) {
  switch (command) {
    case 'my-tweets':
      tweets(commandArg, function(data) {
        log(data);
      });
      break;
    case 'spotify-this-song':
      spotify(commandArg, function(data) {
        log(data);
      });
      break;
    case 'movie-this':
      movies(commandArg, function(data) {
        log(data);
      });
      break;
    case 'do-what-it-says':
      random(function(data) {
        decider(data[0], data[1]);
        log(new Date() + "\nCalled " + param.join(" ") + " from the random.txt file\n" + divider);
      })
      break;
    default:
      console.log("Error. Invalid argument.");
      log(new Date() + "\nError: Invalid Argument\nUser Input: " + param.join(" ") + "\n" + divider);
      break;
  }
}