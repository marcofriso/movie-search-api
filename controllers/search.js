const fetch = require("node-fetch");
require("dotenv").config();

const redis = require("redis");
const port_redis = process.env.PORT || 6379;
const redisClient = redis.createClient(port_redis);

const handleApiCall = (req, res) => {
  const params = {
    apikey: process.env.API_KEY,
    ...req.body,
  };
  const id = new URLSearchParams(req.body).toString();

  fetch(`https://www.omdbapi.com/?${new URLSearchParams(params)}`)
    .then((response) => response.json())
    .then((response) => {
      res.json(response);
      redisClient.setex(id, 3600, JSON.stringify(response));
    })
    .catch((err) => {
      res.status(400).json(err);
      console.log("BE - SEARCH API ERROR");
    });
};

module.exports = {
  handleApiCall,
  redisClient: redisClient,
};
