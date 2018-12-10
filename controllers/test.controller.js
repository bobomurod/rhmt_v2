exports.test = function(req, res) {
  //res.send({message: "test"})
  console.log("hello");
  res.status(200).json({ message: "test" });
};
