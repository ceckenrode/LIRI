/*Uses the twitter npm package to console log the last 20 tweets. Passes back the tweet data and some
information such as the date and time and argument used after execution to the log.txt file. */
module.exports = function(callback) {
  var twitter = require("./keys.js");
  var twitterKeys = twitter.twitterKeys;
  var Twitter = require('twitter');
  var dataPrefix = "Date: " + new Date() + "\nCommand: my-tweets\nCommand Argument: N/A\n";
  var dataString = "";
  var divider = "------------------------------------\
---------------------------------------------------------------------------------------------------\n"
  var res = [];

  var client = new Twitter({
    consumer_key: twitterKeys.consumer_key,
    consumer_secret: twitterKeys.consumer_secret,
    access_token_key: twitterKeys.access_token_key,
    access_token_secret: twitterKeys.access_token_secret,
  });

  var params = {
    screen_name: 'cseckenrode';
  };
  client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {
      for (var i = 0; i < 20; i++) {
        dataString += tweets[i]['text'] + "\n";
      }
      console.log(dataString);
      callback(dataPrefix + dataString + divider);
    }
  });

};