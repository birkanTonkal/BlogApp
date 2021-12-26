const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const auth = require("./routes/auth");
const post = require("./routes/posts");
const cors = require("cors");

dotenv.config();
app.use(express.json());
mongoose
    .connect(process.env.MONGODB_URL)
    .then(console.log("connect mongodb"))
    .catch((e) => {
        console.log(e);
    });
app.use(cors());
app.use("/server/auth", auth);
app.use("/server/post", post);

app.listen("5000", () => {
    console.log("backend running");
});
