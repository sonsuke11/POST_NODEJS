const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const postRouter = require("./routers/post");
const hbs = require("express-handlebars");

const app = express();

const PORT = 3000;

//khoi dong handlebars middleware
app.engine("handlebars", hbs());
app.set("view engine", "handlebars");

//mot so route có thể đưa vào file riêng
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

connectDB();
app.get("/", (req, res) => res.render("index"));
app.get("/about", (req, res) => res.render("about"));

app.use("/posts", postRouter);
app.listen(PORT, () => console.log("listen on post " + 3000));
