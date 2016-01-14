module.exports = function() {
  var twitter = require("./keys.js");
  var twitterKeys = twitter.twitterKeys;
  var Twitter = require('twitter');
  var res = [];

  var client = new Twitter({
    consumer_key: twitterKeys.consumer_key,
    consumer_secret: twitterKeys.consumer_secret,
    access_token_key: twitterKeys.access_token_key,
    access_token_secret: twitterKeys.access_token_secret,
  });

  var params = {
    screen_name: 'cseckenrode'
  };
  client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {
      for (var i = 0; i < 20; i++) {
        res.push(tweets[i]['text']);
        console.log(res[i]);
      }
      return res;
    }
  });

};