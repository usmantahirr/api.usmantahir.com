const express = require("express");
const router = express.Router();

const getNinjas = require("../controllers/tretton.getNinjas");

router.get("/", (req, res) => {
  return res.json({
    message: "Welcome tretton37 API to Home",
    author: "Usman Tahir",
  });
});

router.get("/ninjas", getNinjas);

module.exports = router;
