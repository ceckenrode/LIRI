module.exports = function(songName) {
var spotify = require('spotify');
var spotifyObj = {};

spotify.search({ type: 'track', query: songName }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }
 
    spotifyObj.artist = data.tracks.items[0].artists[0].name;
    spotifyObj.song = data.tracks.items[0].name;
    spotifyObj.preview = data.tracks.items[0].artists[0].external_urls.spotify;
    spotifyObj.album = data.tracks.items[0].album.name;

    for (var item in spotifyObj) {
    console.log(item + " = " + spotifyObj[item]);
    }
});
};