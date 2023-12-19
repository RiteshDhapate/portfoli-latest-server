const mongoose = require("mongoose");

const schema = mongoose.Schema({
  heroSection: Object,
  contact: Object,
  aboutSection: Object,
  project: Array,
  skills:Object,
  timeLine:Array
});


module.exports = mongoose.model("data",schema);