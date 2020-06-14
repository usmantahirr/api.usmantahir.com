const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({
    message: "Welcome API to Home",
    author: "Usman Tahir",
  });
});

const port = process.env.port || 8081;

app.listen(port, () => {
  console.log(`started app on port ${port}`);
});
