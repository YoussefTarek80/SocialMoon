const post = require("../models/PostsModel");
const user = require("../models/UserModel");
const addPost = async (req, res) => {
  try {
    const userId = req.params.id;
    const existsUser = await user.findById(userId);
    if (!existsUser) {
      return res.status(404).send("User not found");
    }
    const newPost = new post({
      user: userId,
      name: existsUser.name,
      surname:existsUser.surname,
      Userimg: existsUser.img,
      likes: req.body.likes,
      comments: req.body.comments,
      Text: req.body.Text,
      Postimg: req.body.Postimg,
    });
    try {
      await newPost.save();
      res.status(200).send("Post Shared");
    } catch (error) {
      res.status(400).send("Cant Share....");
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal server error");
  }
};
const GetPosts = async (req, res) => {
  try {
    const posts = await post
      .find()
      .limit(10) 
      .sort({ createdAt: -1 }); 

    res.send(posts);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal server error");
  }
};
module.exports = {
  addPost,
  GetPosts,
};
