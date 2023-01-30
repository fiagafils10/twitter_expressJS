const Tweet = require("../database/models/tweet.model");

exports.tweetList = async (req, res, next) => {
  try {
    const tweets = await Tweet.find({}).exec();

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
    const body = req.body;
    const newTweet = new Tweet(body);
    await newTweet.save();
    res.redirect("/");
  } catch (err) {
    const errors = err.errors.content.properties.message;
    // res.status(400).render("tweets/tweet-form", { errors });
    res.status(200).json("ok")
  }
};
