const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  return res.json({
    message: "Welcome tretton37 API to Home",
    author: "Usman Tahir",
  });
});

module.exports = router;
