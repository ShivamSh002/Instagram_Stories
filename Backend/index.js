const express = require("express");
const cors = require("cors");
const data = require("./MockData.json");

const app = express();

app.use(cors());

app.use("/data", (req, res) => {
  res.json(data);

  res.end();
});

app.listen(3001, () => {
  console.log("hello");
});
