const Post = require("../models/Post");
const User = require("../models/User");
const router = require("express").Router();

router.post("/write", async (req, res) => {
    try {
        const newPost = new Post({
            username: req.body.username,
            title: req.body.title,
            content: req.body.content,
            image: req.body.image,
            viewCount: req.body.viewCount,
        });
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    } catch (e) {
        res.status(500).json(e);
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post.username === req.body.username) {
            try {
                await post.delete();
                res.send("Succesfully deleted");
            } catch (e) {
                res.status(500).json(e);
            }
        } else {
            res.send("This is not your post");
        }
    } catch (e) {
        res.status(500).json(e);
    }
});

//SINGLE POST FOR SINGLE PAGE
router.get("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        post &&
            (await Post.findByIdAndUpdate(
                { _id: req.params.id },
                { $inc: { viewCount: 1 } }
            ));
        res.status(200).json(post);
    } catch (e) {
        res.status(500).json(e);
    }
});

//Add comment to post
router.put("/comment/:id", async (req, res) => {
    try {
        const post = await Post.findByIdAndUpdate(req.params.id, {
            $push: {
                comments: [
                    {
                        username: req.body.username,
                        comment: req.body.comment,
                        date: req.body.date,
                    },
                ],
            },
        });
        res.status(200).json(post);
    } catch {
        res.status(500).json(e);
    }
});
router.put("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post.username === req.body.username) {
            try {
                const updatedPost = await Post.findByIdAndUpdate(
                    post.id,
                    {
                        title: req.body.title,
                        content: req.body.content,
                        image: req.body.image,
                    },
                    { new: true }
                );
                res.status(200).json(updatedPost);
            } catch (e) {
                res.status(500).json(e);
            }
        } else {
            res.status(401).json("You can update only your post");
        }
    } catch (e) {
        res.status(500).json(e);
    }
});

//GET ALL POSTS
router.get("/", async (req, res) => {
    const user = req.query.user;
    let posts;
    try {
        if (user) {
            //POSTS FROM SPECIFIC USER
            posts = await Post.find({ username: user });
        } else {
            //ALL POSTS
            posts = await Post.find();
        }
        res.status(200).json(posts);
    } catch (e) {
        res.status(500).json(e);
    }
});


module.exports = router;
