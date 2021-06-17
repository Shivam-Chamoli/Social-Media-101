const router = require('express').Router();
const Users = require(__dirname + "/../models/Users");
const bcrypt = require("bcrypt");
router.get('/', (req, res) => {
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
            email: req.body.email
        });
        !userLogin && res.status(404).json("User not found");
        const validPassword = await bcrypt.compare(req.body.password, userLogin.password);
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
                $set: req.body
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

router.delete("/:id", async (req,res)=>{
    if(req.body.userId === req.params.id || req.body.isAdmin){
        try{
            const user= await Users.findByIdAndDelete(req.params.id);
            res.status(200).json("Your account have been deleted")
        }catch(err){
            console.log(err);
            res.send(err);
        }
    }else{
        return res.status(403).json("You can only delete your own account")
    }
});

module.exports = router;

//get user

//follow a user

//unfollow a user