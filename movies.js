module.exports = function(movieName) {
  var request = require("request");
  var URL = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=full&tomatoes=true&r=json";
  var dataPrefix = "Date: " + new Date() + "\nCommand: spotify-this-song\nCommand Argument: " + songName + "\n";
  var dataString = "";
  var divider = "------------------------------------\
  ----------------------------------------------------------------------------------------------------\n"
  if (!movieName) {
    URL = "http://www.omdbapi.com/?t=Mr.+Nobody&y=&tomatoes=true&plot=full&r=json";
  }
  var movieObj = {};

  var request = require('request');
  request(URL, function(error, response, body) {
    if (!error && response.statusCode == 200) {
      var bodyJSON = JSON.parse(body);
      movieObj.Title = bodyJSON.Title;
      movieObj.Year = bodyJSON.Year;
      movieObj.IMDB = bodyJSON.imdbRating;
      movieObj.Country = bodyJSON.Country;
      movieObj.Language = bodyJSON.Language;
      movieObj.Plot = bodyJSON.Plot;
      movieObj.Actors = bodyJSON.Actors;

      for (var item in movieObj) {
        console.log(item + ": " + movieObj[item]);
      }
    }
  })
};