import Cookies from "universal-cookie";

const feathers = require("@feathersjs/feathers");
const rest = require("@feathersjs/rest-client");
const axios = require("axios");

const app = feathers();
const cookies = new Cookies();
const config = {
    headers: {
      'Authorization': 'Bearer ' + cookies.get('access_token'),
      'Content-Type': 'application/json',
    }
  };
const restClient = rest("http://localhost:3030",config);

app.configure(restClient.axios(axios));

const user = app.service("user");

// export const userInfo = (payload) => {
//     console.log(payload);
    
//     return user.find(payload);
// }
export const userInfo = () => user.find({
    headers: {
      'Authorization': 'Bearer ' + cookies.get('access_token'),
      'Content-Type': 'application/json',
    }
  });
