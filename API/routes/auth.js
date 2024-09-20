const router = require("express").Router();
const User = require('../models/User');
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

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
router.post("/login", async (req, res) => {
    try {
        // Check if user exists
        const savedUser = await User.findOne({ email: req.body.email });
        if (!savedUser) {
            return res.status(404).json("Wrong Username or Password");
        }

        // Decrypt password
        const bytes = CryptoJS.AES.decrypt(savedUser.password, process.env.SECRET_KEY);
        const originalPassword = bytes.toString(CryptoJS.enc.Utf8);

        // Compare passwords
        if (originalPassword !== req.body.password) {
            return res.status(404).json("Wrong Username or Password");
        }

        // Create JWT token
        const accessToken = jwt.sign(
            { id: savedUser._id, isAdmin: savedUser.isAdmin },
            process.env.SECRET_KEY,
            { expiresIn: "7d" }
        );

        // Destructure user object to exclude password
        const { password, ...info } = savedUser._doc;
        res.status(200).json({ ...info, accessToken });

    } catch (err) {
        res.status(500).json(err); // Changed to 500 for server error
    }
});

module.exports = router;
