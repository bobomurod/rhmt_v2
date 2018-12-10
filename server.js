const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

const test = require("./routes/test.route");

var routes = require("./routes/routes");

var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/test", test);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

routes(app);

app.get("/", (req, res, next) => {
  console.log("requested / ");
  res.status(200).json({ message: "index" });
});

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
