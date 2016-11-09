const express = require("express");
const path = require("path");
const app = express();
const lessMiddleware = require("less-middleware");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(lessMiddleware(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", function (req, res) {
    res.render("hwchr/home", { page: "home" });
});

app.get("/about", function (req, res) {
    res.render("hwchr/about", { page: "about" });
});

app.get("/projects", function (req, res) {
    res.render("hwchr/projects", { page: "projects" });
});

app.listen(3000, function () {
    console.log("Express listening on port 3000.");
});