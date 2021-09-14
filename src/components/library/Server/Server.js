const axios = require("axios");

export default function getUsers() {
  return axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
    //console.log(JSON.stringify(res.data));
    return res.data;
  });
}
