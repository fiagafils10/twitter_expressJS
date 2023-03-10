const router = require("express").Router();
const tweets = require("./tweets.routes");
const users = require ('./users.routes')
const Tweet = require("../database/models/tweet.model");

router.use('/tweets', tweets)
router.use('/users', users)

router.get('/', (req,res) => {
  res.redirect('/tweets')
})


module.exports = router;
