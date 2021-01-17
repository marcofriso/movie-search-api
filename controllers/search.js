const fetch = require("node-fetch");
require("dotenv").config();

const handleApiCall = (req, res) => {
  const params = {
    apikey: process.env.API_KEY,
    ...req.body,
  };

  // console log the request body
  console.log(JSON.stringify(req.body));

  fetch(`https://www.omdbapi.com/?${new URLSearchParams(params)}`)
    .then((response) => response.json())
    .then((response) => {
      res.json(JSON.stringify(response));
    })
    .catch((err) => res.status(400).json("API ERROR: ", err));
};

module.exports = {
  handleApiCall,
};
