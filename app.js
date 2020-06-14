const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

const home = require("./src/routes/home");
const tretton = require("./src/routes/tretton");

app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

app.use("/", home);
app.use("/tretton", tretton);

const port = process.env.port || 8081;

app.listen(port, () => {
  console.log(`started app on port ${port}`);
});
