const router = require("express").Router();
const Users = require(__dirname + "/../models/Users");
const bcrypt = require("bcrypt");

//get All users
router.get("/allUsers", (req, res) => {
  console.log("user route");
  if (req.body.isAdmin) {
    Users.find({}, (err, result) => {
      if (!err) res.send(result);
      else console.log(err);
    });
  } else {
    return res.status(403).json("Invalid Access");
  }
});

//Update User

router.put("/:id", async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    if (req.body.password) {
      try {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
      } catch (err) {
        res.json(err);
      }
    }
    try {
      const user = await Users.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
      res.status(200).json("Your Account have been Updated.");
    } catch (err) {
      console.log(err);
      res.send(err);
    }
  } else {
    return res.status(403).json("You can only update your account.");
  }
});

//Delete User

router.delete("/:id", async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    try {
      await Users.findByIdAndDelete(req.params.id);
      res.status(200).json("Your account have been deleted");
    } catch (err) {
      console.log(err);
      res.send(err);
    }
  } else {
    return res.status(403).json("You can only delete your own account");
  }
});

//get user
router.get("/", async (req, res) => {
  const userId = req.query.userId;
  const username = req.query.username;
  try {
    const user = userId
      ? await Users.findById(userId)
      : await Users.findOne({ username: username });
    const { password, updatedAt, ...other } = user._doc;
    res.status(200).json(other);
  } catch (err) {
    res.status(500).json(err);
  }
});

//follow a user
router.put("/:id/follow", async (req, res) => {
  if (req.body.userId !== req.params.id) {
    try {
      const user = await Users.findById(req.params.id);
      const currUser = await Users.findById(req.body.userId);
      if (!user.followers.includes(req.body.userId)) {
        await user.updateOne({
          $push: {
            followers: req.body.userId,
          },
        });
        await currUser.updateOne({
          $push: {
            following: req.params.id,
          },
        });
        res.status(200).json("user have been followed");
      } else {
        res.status(403).json("You already follow");
      }
    } catch (err) {
      console.log(err);
      res.send(err);
    }
  } else {
    return res.status(403).json("You can only only follow others");
  }
});

//unfollow a user
router.patch("/:id/unfollow", async (req, res) => {
  if (req.params.id !== req.body.userId) {
    try {
      const userToUnFollow = await Users.findById(req.params.id);
      const currUser = await Users.findById(req.body.userId);
      if (userToUnFollow.followers.includes(req.body.userId)) {
        await userToUnFollow.updateOne({
          $pull: {
            followers: req.body.userId,
          },
        });
        await currUser.updateOne({
          $pull: {
            following: req.params.id,
          },
        });
        res.status(200).json("user have been unfollowed");
      } else {
        res.status(403).json("You dont follow this user");
      }
    } catch (error) {
      console.log(error);
      res.send(error);
    }
  } else {
    res.status(403).json("You can only unfollow others");
  }
});

// get all followers
router.get("/friends/:userId", async (req, res) => {
  try {
    const user = await Users.findById(req.params.userId);
    const friends = await Promise.all(
      user.followings.map((friendId) => {
        return Users.findById(friendId);
      })
    );
    let friendList = [];
    friends.map((friend) => {
      const { _id, username, profilePicture } = friend;
      friendList.push({ _id, username, profilePicture });
    });
    res.status(200).json(friendList);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
