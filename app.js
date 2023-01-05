const express = require("express");
const path = require("path");
const morgan = require("morgan");
const index = require ('./routes')
require('./database/index')

const app = express();



app.use(morgan("short"));
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(index, )// va return index qui lui meme return home

app.listen(5000);
   