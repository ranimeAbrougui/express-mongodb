const mongoose = require("mongoose");
const imageSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  source: {
    type: String,
    required: true,
  },
  link: {
    type: String,
  },
  description: {
    type: String,
  },
});
const imageModels = mongoose.model("images", imageSchema);
module.exports = imageModels;