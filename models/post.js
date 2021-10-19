const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
  SafeName: {
    type: String,
  },
  Owner: {
    type: String,
  },
  Description: {
    type: String,
  },
  Type: {
    type: String,
  },
});

module.exports = mongoose.model("Posts", PostSchema);
