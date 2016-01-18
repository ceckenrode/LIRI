module.exports = function(songName, callback) {
var spotify = require('spotify');
var spotifyObj = {};
var dataPrefix = "Date: " + new Date() + "\nCommand: spotify-this-song\nCommand Argument: " + songName + "\n";
var dataString = "";
var divider = "------------------------------------\
---------------------------------------------------------------------------------------------------\n"

spotify.search({ type: 'track', query: songName }, function(err, data) {
    if ( err ) {
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