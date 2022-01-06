const express = require("express");
const { json } = require("express/lib/response");
const https = require("https");
const app = express();
const bodyParser = require("body-parser");
const { request } = require("http");
const router = require("express").Router();

app.use(bodyParser.urlencoded({ extended: false }));

// Homepage
router.get("/", (req, res, next) => {
  res.render("index", { layout: "main" });
  console.log("Served index.");

  https.get("https://v2.jokeapi.dev/joke/Any", function (response) {
    console.log(response.statusCode);

    response.on("data", function (data) {
      const joke = JSON.parse(data);
      console.log(`The category of the joke is  ${joke.category}`);
      //res.send(`The category of the joke is  ${joke.category}`);
    });
  });
});

app.post("/", function (req, res) {
  console.log(req.body.course);
});

module.exports = router;
