const mongoose = require("mongoose");

const PostsSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.Mixed,
    ref: "user",
  },
  name:{
    type: String,
  },
  surname:{
    type:String
  },
  Userimg:{
    type: String,
  },
  likes: {
    type: Number,
  },
  comments: {
    type: String,
  },
  Text: {
    type: String,
    required:true
  },
  Postimg:{
    type: String,
  }
});
const post = mongoose.model("posts", PostsSchema);
module.exports = post;
