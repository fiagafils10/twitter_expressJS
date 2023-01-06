const router = require("express").Router();
const api = require("./api");
const Tweet = require("../database/models/tweet.model");

router.use("/api", api);

router.get("/tweet/new", (req, res) => {
  res.render("../views/tweets/tweet-form.pug");
});

router.get("/", (req, res) => {
  Tweet.find({}).exec().then((tweets) =>
    res.render("../views/tweets/tweet-list.pug", { tweets })
  );

  //venant de pug, enfaite cette route va nous diriger vers la page d'acceuil
});

module.exports = router;
