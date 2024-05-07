var path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());

app.listen(8000, function () {
  console.log("Example app listening on port 8000!");
});

app.get("/", function (req, res) {
  res.sendFile("dist/index.html");
});

// Variables for url and api key
const apiKey = 'c4160061cae7d53e41e963c2d8a1db6c';
app.get("/api-key", function (req, res) {
  res.send(apiKey);
});
// POST Route
