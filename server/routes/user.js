const User = require("../models/User");
const router = require("express").Router();

//update account
router.put("/:id", async (req, res) => {
    if (req.body.userId === req.params.id) {
        try {
            const updatedUser = await User.findByIdAndUpdate(
                req.params.id,
                {
                    username: req.body.username,
                    email: req.body.email,
                    image: req.body.image,
                },
                { new: true }
            );
            res.status(200).json(updatedUser);
        } catch (e) {
            res.status(500).json(e);
        }
    }
});


module.exports = router;
