const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcrypt-nodejs");
const knex = require("knex");

const search = require("./controllers/search");
const signup = require("./controllers/signup");
const login = require("./controllers/login");

// Postgres database setup local
const db = knex({
  client: "pg",
  connection: {
    host: "127.0.0.1",
    user: "",
    password: "",
    database: "movie-search",
  },
});

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("BE - OK");
});

app.post("/signup", (req, res) => {
  signup.handleSignup(req, res, db, bcrypt);
});

app.post("/login", login.handleLogin(db, bcrypt));

app.post("/search", (req, res) => {
  search.handleApiCall(req, res);
});

app.listen(3001, () => {
  console.log("app is running on port 3001");
});
