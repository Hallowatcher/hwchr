const express = require("express");
const app = express();

app.get("/",
    function (req, res) {
        res.send("works");
    });

app.listen(3000,
    function () {
        console.log("Express listening on port 3000.");
    });