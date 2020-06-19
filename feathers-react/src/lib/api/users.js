// import Cookies from "universal-cookie";

const feathers = require("@feathersjs/feathers");
const rest = require("@feathersjs/rest-client");
const axios = require("axios");
// const cookies = new Cookies();

// const config = {
//     headers: {
//       'Authorization': 'Bearer ' + cookies.get('access_token'),
//       'Content-Type': 'application/json',
//     }
//   };

const app = feathers();
// Connect to the same as the browser URL (only in the browser)
const restClient = rest("http://localhost:3030");

// app.configure(restClient);

app.configure(restClient.axios(axios));

// app.configure(feathers.authentication());

const users = app.service("users/login");



// .create({
//   headers: {
//     "X-Requested-With": "application/json",
//     "Access-Control-Allow-Origin": "*",
//   },
// });

export const userLogin = (user) => users.create(user);
