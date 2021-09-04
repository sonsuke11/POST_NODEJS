const express = require("express");
const Post = require("../models/Post");

const router = express.Router();

//hien thi tat ca bai viet
router.get("/", async (req, res) => {
  const posts = await Post.find().lean().sort({ date: -1 });
  res.render("posts/index", { posts });
});

//hien thi giao dien tao bai viet
router.get("/add", async (req, res) => {
  res.render("posts/add");
});

//tao bai viet
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

//hien thi form de thay doi bai viet
router.get("/edit/:id", async (req, res) => {
  const post = await Post.findOne({ _id: req.params.id }).lean();
  res.render("posts/edit", { post });
});

//cap nhat thay doi bai viet vao csdl
router.put("/:id", async (req, res) => {
  const { title, content } = req.body;
  await Post.findOneAndUpdate({ _id: req.params.id }, { title, content });
  res.redirect("/posts");
});

router.delete("/:id", async (req, res) => {
  await Post.findByIdAndDelete({ _id: req.params.id });
  res.redirect("/posts");
});
module.exports = router;
