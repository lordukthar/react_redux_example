const axios = require("axios");

const instance = axios.create({
  // baseURL: 'https://jsonplaceholder.typicode.com/users/',
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});

export default function getUsers() {
  return axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
    return res.data;
  });
}

export function getUser(id) {
  return instance
    .get("https://jsonplaceholder.typicode.com/users/" + id, {})
    .then(function (response) {
      // handle success
      var a = response.data;
      console.log("response" + JSON.stringify(response));
      console.log("data:" + JSON.stringify(response.data));
      console.log(
        "config:" + JSON.stringify(response.config.headers["X-Custom-Header"])
      );
      return a;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
      return { name: "No name", id: 0 };
    });
}

/**
 * const {promisify} = require('util');
const got = require('got');
const {CookieJar} = require('tough-cookie');
const cookieJar = new CookieJar();
const setCookie = promisify(cookieJar.setCookie.bind(cookieJar));
await setCookie(`cookie_name=${cookie_value}`, 'https://your-domain.com');
await got('https://your-domain.com', {cookieJar} )
 */
