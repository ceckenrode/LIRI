#Project Name#
LIRI is a natural language interpreter. It can do things such as log your tweets, find spotify information on a passed song or artist, grab data from the OMDB database, or read commands from a text file. Commands and values returned are logged into the log.txt file
### Installation
Clone the repo
## Usage
cd into the directory and type in 'node liri.js' followed by your argument.
###Arguments
####my-tweets
By default passing my-tweets will return the last 20 tweets of my twitter account cseckenrode. If you'd like you can get the tweets of your own account so long as it's not private in the following way:
node liri.js my-tweets yourAccountNameHere
####spotify-this-song
By default we passing spotify-this-song will return spotify album data for the first result of the search "What's My Age Again?". You can specify your own song to search for in the following way:
node liri.js spotify-this-song yourSongNameHere
####movie-this
By default we passing movie-this will return OMDB movie data for the result of the search "Mr. Nobody". You can specify your own movie to search for in the following way:
node liri.js movie-this yourMovieNameHere
####do-what-it-says
Passing do-what-it-says will read the contents of the random.txt file and if the contents are a valid command, then it will be executed. The text should be formatted as follows:

command,commandArgument 

example:
in otherwords: spotify-this-song,What's MyAgeAgain?
### Contributing
1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D
### History
Done as an introduction to Node.js
###Credits
Christian Eckenrode
###License
N/A
