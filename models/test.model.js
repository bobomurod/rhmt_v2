const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let WarriorSchema = new Schema({
  account: {},
  level: {},
  balance: {},
  discount: {},
  status: {}
});

module.exports = mongoose.model("Test", WarriorSchema);
