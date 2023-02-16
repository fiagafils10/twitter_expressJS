const express = require("express");
const path = require("path");
const morgan = require("morgan");
const errorHandler = require('errorhandler')
const index = require ('./routes')
require('./database/index')

const app = express();



app.use(morgan("short"));
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

require('./config/session.config')

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(index)// va return index qui lui meme return home

if (process.env.NODE_ENV === 'developement'){
    app.use(errorHandler())
}else{
    app.use((err,req, res, next) => {
        const code =  err.code || 500
        res.status(code).json({
            code:code,
            message:code ===500 ? null : err.message
        })
    })
}
app.use(errorHandler())


app.listen(3000);
