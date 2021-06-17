const router = require('express').Router();
const Users= require(__dirname+"/../models/Users");
router.get('/',(req,res)=> {
    console.log("user route");
    Users.find({},(err,result)=>{
        if(!err) res.send(result);
        else console.log(err);
    });
    
});

module.exports=router;