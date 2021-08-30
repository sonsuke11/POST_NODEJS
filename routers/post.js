const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("router get post");
});
router.get("/:id", (req, res) => {
  const { id } = req.params;
  res.send(`this is post ${id}`);
});

module.exports = router;
