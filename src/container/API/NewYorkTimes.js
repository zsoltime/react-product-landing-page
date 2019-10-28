import axios from "axios";

let baseURL = "https://api.nytimes.com/svc/books/v3/lists/overview.json";
let apiKey = "S1tc1yrOZQO4U3xGA4H7SYdLhUoGFSeW";

export default axios.get(baseURL, {
  params: {
    "api-key": apiKey
  }
});
