const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://joker:<passwordhere>@dymalearn.caquiko.mongodb.net/?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  ).then(console.log("connection ok")).catch((err) => console.log(err));
    