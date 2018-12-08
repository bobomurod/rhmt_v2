const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

var routes = require("./routes/routes.js");

var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/test");
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/", (req, res, next) => {
  console.log("requested / ");
  res
    .status(200)
    .json()
    .send("hello");
});

routes(app);

var server = app.listen(9994, () =>
  console.log("Server running on ", server.address().port)
);

///////////////////////////    MONGO DB CONNECTING    /////////////////

let dev_db_url = "mongodb://localhost:27017/testdb";
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(
  mongoDB,
  { useNewUrlParser: true }
);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

/////////////////////////   MONGO DB CONN ENDING    /////////////////
