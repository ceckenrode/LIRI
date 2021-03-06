/*Takes in a song name, then uses the spotify npm package to search spotify for information.
If successful, we log some data about the song to the console. We log this same information along
with some data about how and when the function was executed to the log.txt file. */
module.exports = function(songName, callback) {
  var spotify = require('spotify');
  var spotifyObj = {};
  var dataPrefix = "Date: " + new Date() + "\nCommand: spotify-this-song\nCommand Argument: " + songName + "\n";
  var dataString = "";
  var divider = "------------------------------------\
---------------------------------------------------------------------------------------------------\n"

  spotify.search({
    type: 'track',
    query: songName
  }, function(err, data) {
    if (err) {
      console.log('Error occurred: ' + err);
      return;
    }

    spotifyObj.Artist = data.tracks.items[0].artists[0].name;
    spotifyObj.Song = data.tracks.items[0].name;
    spotifyObj.Preview = data.tracks.items[0].artists[0].external_urls.spotify;
    spotifyObj.Album = data.tracks.items[0].album.name;

    for (var item in spotifyObj) {
      dataString += item + ": " + spotifyObj[item] + "\n";


    }
    console.log(dataString);
    callback(dataPrefix + dataString + divider);
  });
};