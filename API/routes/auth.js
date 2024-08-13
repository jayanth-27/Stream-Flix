const router = require("express").Router();
const User= require('../models/User');
const CryptoJS = require("crypto-js");
const jwt =require("jsonwebtoken");
//User Registration
router.post("/register", async (req, res) => {
    try {
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString()
        });

        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (err) {
        res.status(500).json(err);
    }
});

//Login
router.post("/login", async (req,res) =>{
    try{
        const savedUser = await User.findOne({email: req.body.email});
        !savedUser && res.status(404).json("Wrong Username or Password");

        // Decrypt password
        const bytes  = CryptoJS.AES.decrypt(savedUser.password, process.env.SECRET_KEY);
        const originalPassword = bytes.toString(CryptoJS.enc.Utf8);

        (originalPassword !== req.body.password) && res.status(404).json("Wrong Username or Password");
        
        //create a web token before sending any info
        const accessToken = jwt.sign({id: savedUser._id, isAdmin:savedUser.isAdmin},process.env.SECRET_KEY,{expiresIn:"7d"});
        //for not sending password back when details are requested we use destructing
        const{password, ...info}=savedUser._doc;
        res.status(200).json({...info,accessToken});
    }catch(err)
    {
        res.status(201).json(err);
    }
});

module.exports=router;