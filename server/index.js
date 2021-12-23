const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRouter = require("./routes/auth");

dotenv.config();
app.use(express.json());
mongoose
    .connect(process.env.MONGODB_URL)
    .then(console.log("connect mongodb"))
    .catch((e) => {
        console.log(e);
    });

app.use("/server/auth", authRouter);

app.listen("5000", () => {
    console.log("backend running");
});
