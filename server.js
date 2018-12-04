const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

var server = app.listen(9994, () =>
  console.log("Server running on ", server.address().port)
);

app.get("/", (req, res, next) => {
  console.log("requested / ");
  res
    .status(200)
    .json()
    .send("hello");
});
