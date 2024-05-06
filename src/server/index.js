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

// Variables for url and api key
app.get("/", function (req, res) {
  res.sendFile("dist/index.html");
});

// POST Route
