const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb://localhost:27017/twitter?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  ).then(console.log("connection ok")).catch((err) => console.log(err));
