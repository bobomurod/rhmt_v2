const initmodel = require("../models/initv1.model");
const testmodel = require("../models/test.model");
var appRouter = function(app) {
  app.get("/test", function(req, res, next) {
    console.log("Responding...");
    res.status(200).json(test_cont);
    console.log("Done.");
  });

  app.get("/init_v1", function(req, res, next) {
    res.status(200).json("init");
  });
};

module.exports = appRouter;
