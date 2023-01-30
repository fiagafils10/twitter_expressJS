const router = require("express").Router();
const {
  tweetCreate,
  tweetNew,
  tweetList,
} = require("../controllers/tweet.controller");
const Tweet = require("../database/models/tweet.model");

router.post("/", tweetCreate);

router.get("/new", tweetNew);

router.get("/", tweetList);

module.exports = router;
