import { ContentAddCircleOutline } from "material-ui/svg-icons";

const axios = require("axios");

export default function getUsers() {
  return axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
    return res.data;
  });
}

export function getUser(id) {
  return axios
    .get("https://jsonplaceholder.typicode.com/users/" + id)
    .then(function (response) {
      // handle success
      var a = response.data;
      console.log(JSON.stringify(a));
      return a;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
      return { name: "No name", id: 0 };
    });
}
