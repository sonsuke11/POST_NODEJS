const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//create models
const postSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  content: {
    type: String,
    required: true,
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("post", postSchema);
