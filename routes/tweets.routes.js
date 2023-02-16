const router = require("express").Router();
const {
  tweetCreate,
  tweetNew,
  tweetList,
} = require("../controllers/tweet.controller");
const Tweet = require("../database/models/tweet.model");

router.post("/", tweetCreate);
// router.post("/update/:tweetId", tweetUpdate);

router.get("/", tweetList);
router.get("/new", tweetNew);
// router.get('/edit:tweetId', tweetEdit)

// router.delete('/:tweetId', tweetDelete)

module.exports = router;
