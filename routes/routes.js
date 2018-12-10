const express = require("express");
const router = express.Router();

const initmodel = require("../models/initv1.model");
const testmodel = require("../models/test.model");
const testroute = require("./test.route");
const testcontroller = require("../controllers/test.controller");

var appRouter = function(app) {
  router.get("/test", testcontroller.test());

  // app.get("/test", function(req, res, next) {
  //   console.log("Responding...");
  //   res.status(200).json(testcontroller) ;
  //   console.log("Done.");
  // });

  // app.get("/init_v1", function(req, res, next) {
  //   res.status(200).json("init");
  // });
};

module.exports = appRouter;
