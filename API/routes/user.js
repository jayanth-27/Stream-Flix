const router= require("express").Router();
const User =require("../models/User");
const CryptoJS = require("crypto-js");
const verify=require("../verifyToken");

//UPDATE
router.put("/update/:id", verify,async (req,res)=>{
    /* After verifying the jwt in verifyToken.js file,
    the user is allowed to update if the id's match or it is Admin */
    if(req.userInfo.id===req.params.id || req.userInfo.isAdmin)
    {
        if(req.body.password)
        {
            req.body.password= CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString();
        }
        try{
            const updatedUser = await User.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});
            const{password, ...updatedUserInfo}=updatedUser._doc;
            res.status(201).json(updatedUserInfo);
        }catch(err){
            res.status(500).json(err);
        }
    }else{
        res.status(403).json("You can only update your account");
    }
});

//DELETE
router.delete("/delete/:id", verify,async (req,res)=>{
    /* After verifying the jwt in verifyToken.js file,
    the user is allowed to update if the id's match or it is Admin */
    if(req.userInfo.id===req.params.id || req.userInfo.isAdmin)
    {
        if(req.body.password)
        {
            req.body.password= CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString();
        }
        try{
            const updatedUser= await User.findByIdAndDelete(req.params.id);
            res.status(201).json(updatedUser);
        }catch(err){
            res.status(500).json(err);
        }
    }else{
        res.status(403).json("You can only delete your account");
    }
});

//GET ONE USER INFO
//This doesn't require any verification coz for getting general user info verification is not necessary
router.get("/find/:id",async (req,res)=>{
    try{
        const userInfo= await User.findById(req.params.id);
        const{password,...updatedUserInfo}=userInfo._doc;
        res.status(201).json(updatedUserInfo);
    }catch(err){
        res.status(500).json(err);
    }
});

//Get ALL USERS INFO
router.get("/", verify,async (req,res)=>{
    const query= req.query.new;
    if(req.userInfo.isAdmin)
    {
        try{
            //if there is a 'new' in the query then return latest 10 users else all users
            const users= query ? await User.find().sort({_id:-1}).limit(10) : await User.find().sort({_id:-1});
            res.status(201).json(users);
        }catch(err){
            res.status(500).json(err);
        }
    }else{
        res.status(403).json("You are not allowed");
    }
});

//GET USER STATS
router.get("/stats", async (req,res)=>{
    //for getting stats of users in one year from today
    const today = new Date();
    const lastYear = today.setFullYear(today.setFullYear()-1);
    const monthArray=[
        "January",
        "Febuary",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];
    try{
        const data= await User.aggregate([
            {
                $project: {
                    month : {$month : "$createdAt"}
                }
            },{
                $group:{
                    
                    _id: "$month",//number represents the month number
                    total:{$sum:1}
                }
            }
        ]);
        res.status(200).json(data);
    }catch(err){
        res.status(500).json(err);
    }
});

module.exports=router;