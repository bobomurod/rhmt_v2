var appRouter = function(app) {
  app.get("/test", function(req, res, next) {
    console.log("Responding...");
    res.status(200).json({ message: "This is test" });
    console.log("Done.");
  });
};

module.exports = appRouter;
