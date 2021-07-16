const router = require("express").Router();
const bcrypt = require("bcrypt");
const Users = require(__dirname + "/../models/Users");

router.post("/register", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    console.log(req.body);
    const hashPassword = await bcrypt.hash(req.body.password, salt);
    const newUser = new Users({
      username: req.body.username,
      email: req.body.email,
      password: hashPassword,
    });
    await newUser.save();
    res.send("Inserted Successfully");
  } catch (err) {
    res.send(err);
  }
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

module.exports = router;
