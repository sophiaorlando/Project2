// const server = require("server.js");
const config = require("./config/config.js");

// const app = express();
// const server = require ("./server.js")
const axios = require("axios");

// API CALL TO VISITOR CENTER (NODE AXIOS)

axios({
  method: "GET",
  url: "https://api.coastal.ca.gov/ccd/v1/locations"
}).then(response => {
  console.log(response);
});
