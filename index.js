const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const postRouter = require("./routers/post");

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

connectDB();

app.use("/post", postRouter);
app.listen(PORT, () => console.log("listen on post " + 3000));
