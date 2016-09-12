const express = require("express");
const app = express();
const stylus = require("stylus");
const nib = require("nib");

function compile(str, path) {
    return stylus(str)
        .set("filename", path)
        .use(nib());
}

app.set("views", __dirname + "/views");
app.set("view engine", "pug");
app.use(stylus.middleware({
    src: __dirname + "/public",
    compile: compile
}));
app.use(express.static(__dirname + "/public"));

app.get("/",
    function (req, res) {
        res.render("index");
    });

app.listen(3000,
    function () {
        console.log("Express listening on port 3000.");
    });