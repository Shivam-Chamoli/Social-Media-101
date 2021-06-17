const router = require('express').Router();
const mongoose = require("mongoose");
const bcrypt= require("bcrypt");
const Users = require(__dirname + "/../models/Users");

router.post("/register", async (req, res) => {

    try {
        const salt= await bcrypt.genSalt(10);
        const hashPassword= await bcrypt.hash(req.body.password, salt);
        const newUser = new Users({
            username: req.body.username,
            email: req.body.email,
            password: hashPassword,
        });
        await newUser.save();
        res.send("Inserted Successfully");
    }catch(err){
        console.log(err);
    }

});

module.exports = router;