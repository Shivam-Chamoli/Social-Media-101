const router = require("express").Router();
const Posts = require("../models/Posts");
const Users = require("../models/Users");

//create new post
router.post("/add-post", async (req, res) => {
  const newPost = new Posts(req.body);
  try {
    const postSaved = await newPost.save();
    res.status(200).json("post Saved Succesfully");
  } catch (error) {
    res.status(500).json(error);
  }
});

//get a User's posts

router.get("/profile/:username", async (req, res) => {
  try {
    const currUser = await Users.findOne({ username: req.params.username });
    const userPosts = await Posts.find({ userId: currUser._id });
    res.status(200).send(userPosts);
  } catch (error) {
    res.status(500).json(error);
  }
});

//get a specific post
router.get("/:id", async (req, res) => {
  try {
    const post = await Posts.findById(req.params.id);
    res.status(200).send(post);
  } catch (error) {
    res.status(404).json(error);
  }
});

//edit post

//delete post
router.delete("/:id", async (req, res) => {
  try {
    const post = await Posts.findByIdAndDelete(req.params.id);
    res.status(200).send("Post Deleted Successfully");
  } catch (error) {
    res.status(404).json(error);
  }
});

//like a post

//get Timeline Post

router.get("/timeline/:userId", async (req, res) => {
  try {
    const currUser = await Users.findById(req.params.userId);
    const userPosts = await Posts.find({ userId: currUser._id });
    const currUserFollowings = currUser.following;
    const timelinePosts = await Promise.all(
      currUserFollowings.map((freindId) => {
        Posts.find({ userId: freindId });
      })
    );
    res.status(200).send(userPosts.concat(...timelinePosts));
  } catch (error) {
    res.send(error);
  }
  if (currUserFollowings) {
    try {
    } catch (error) {
      res.status(404).json(error);
    }
  } else {
    res.status(200).send(userPosts);
  }
});

module.exports = router;
