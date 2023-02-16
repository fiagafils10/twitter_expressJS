const Tweet = require("../database/models/tweet.model");
const { getTweets, createTweets } = require("../queries/tweets.queries");

exports.tweetList = async (req, res, next) => {
  try {
    const tweets = await getTweets()

  res.render("tweets/tweet-list", {tweets});
  } catch (error) {
    next(error);
  }
};

exports.tweetNew = (req, res) => {
  res.render("tweets/tweet-form");
};

exports.tweetCreate = async (req, res, next) => {
  try {
    const body =  req.body;
    createTweets(body)
    res.redirect("/tweets");
  } catch (err) {
    const errors = err.errors.content.properties.message;
    // res.status(400).render("tweets/tweet-form", { errors });
    res.status(200).json("ok")
  }
};
