const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

// REGISTER FEATURE
router.post("/register", async (req, res) => {
    try {
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        });

        const user = await newUser.save();
        res.status(200).json(user);
    } catch (e) {
        let check = User.findOne(
            req.body.username || User.findOne(req.body.email)
        );
        check
            ? res.status(401).json("This email or username already used.")
            : res.status(500).json(e);
    }
});

//LOGIN FEATURE
router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        !user && res.status(400).json("Username or password is not correct");

        const password = await bcrypt.compare(req.body.password, user.password);
        !password &&
            res.status(400).json("Username or password is not correct");

        res.status(200).json(user);
    } catch (e) {
        res.status(500).json(e);
    }
});

module.exports = router;
