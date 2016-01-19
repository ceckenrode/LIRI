/*Takes in a movie name, then uses the request npm package to search the omdb for information.
If successful, we log some data about the movie to the console. We log this same information along
with some data about how and when the function was executed to the log.txt file. */
module.exports = function(movieName, callback) {
  var request = require("request");
  var URL = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=full&tomatoes=true&r=json";
  var dataPrefix = "Date: " + new Date() + "\nCommand: movie-this\nCommand Argument: " + movieName + "\n";
  var dataString = "";
  var divider = "------------------------------------\
---------------------------------------------------------------------------------------------------\n"
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
        dataString += item + ": " + movieObj[item] + "\n";
      }
      console.log(dataString);
      callback(dataPrefix + dataString + divider);

    }
  })
};