const router = require("express").Router();
const Users = require(__dirname + "/../models/Users");
const bcrypt = require("bcrypt");
router.get("/", (req, res) => {
  console.log("user route");
  Users.find({}, (err, result) => {
    if (!err) res.send(result);
    else console.log(err);
  });
});

//User Login
router.post("/login", async (req, res) => {
  try {
    const userLogin = await Users.findOne({
      email: req.body.email,
    });
    !userLogin && res.status(404).json("User not found");
    const validPassword = await bcrypt.compare(
      req.body.password,
      userLogin.password
    );
    !validPassword && res.status(400).json("Passwords do not match");
    res.status(200).json(userLogin);
  } catch (err) {
    console.log(err);
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
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
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

module.exports = router;
