var appRouter = function(app) {
  app.get("/test", function(req, res, next) {
    console.log("Responding...");
    res.status(200).json(hello());
    console.log("Done.");
  });
};

module.exports = appRouter;
