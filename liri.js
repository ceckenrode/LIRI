var param = process.argv.slice(2);
var command = param[0];
var commandArg = param.slice(1).join(' ');
var tweets = require("./twitter.js");
var spotify = require("./spotify.js");

switch (command) {
  case 'my-tweets':
    tweets();
    break;
  case 'spotify-this-song':
    spotify(commandArg);
    break;
  case 'movie-this':
    break;
  case 'do-what-it-says':
    break;
  default:
    console.log("Error. Invalid argument.");
    break;
}