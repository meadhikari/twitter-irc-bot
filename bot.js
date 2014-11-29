var twitter_id = "meadhikari"
var irc = require("irc");
var request = require('request');
var twitter = require('twitter');
var config = {
  channels: ["#startups"],
  server: "irc.freenode.net",
  botName: "hntweets"
};

var bot = new irc.Client(config.server, config.botName, {
  channels: config.channels
});

var twit = new twitter({
    consumer_key: "***************",
    consumer_secret: "*******************************",
    access_token_key: "*******************************",
    access_token_secret: "*********************************"
});

twit.stream('user', {track:twitter_id}, function(stream) {
    stream.on('data', function(data) {
        if (data.text !== undefined && data.user.screen_name == twitter_id)
        {
          console.log(data);  
          bot.say(config.channels[0], data.text);  
        }
        
    });
     
});
