const mongoose = require("mongoose");


const postSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            default: "",
        },
        viewCount: {
            type:Number,
            default: 0
        }
    },
    { timestamps: true }
);


const Post = mongoose.model("Post", postSchema);
module.exports = Post;
