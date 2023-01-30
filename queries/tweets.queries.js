const Tweet = require("../database/models/tweet.model");



exports.getTweets = ()=> {
   return Tweet.find({}).exec();
}

exports.createTweets = (tweetData) => {
    const newTweet = new Tweet(tweetData);
    newTweet.save();
}