const router = require("express").Router();

router.get("/api/users", (req, res) => {
  res.send("user test is successfully");
});
router.post("/userposttest", (req, res) => {
  res.send("your name is ok");
});
module.exports = router;
