const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const search = require("./controllers/search");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("BE-OK");
});

app.post("/search", (req, res) => {
  search.handleApiCall(req, res);
});

app.listen(3001, () => {
  console.log("app is running on port 3001");
});
