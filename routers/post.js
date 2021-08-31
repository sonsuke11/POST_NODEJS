const express = require("express");
const Post = require("../models/Post");

const router = express.Router();

router.get("/add", async (req, res) => {
  res.render("posts/add");
});
router.post("/", async (req, res) => {
  const { title, content } = req.body;
  let error = [];
  if (!title) error.push("title required");
  if (!content) error.push("content required");
  if (error.length > 0) res.render("posts/add", { error, title, content });

  const newPost = new Post({ title, content });
  await newPost.save();
  res.redirect("/posts");
});
module.exports = router;
