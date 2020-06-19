const cors = require("cors");

const feathers = require("@feathersjs/feathers");
const configuration = require("@feathersjs/configuration");
const express = require("@feathersjs/express");
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/canvas", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected to MongoDB");
  })
  .catch((e) => {
    console.log(e);
  });

const services = require("./services");
const authentication = require("./authentication");
const channels = require("./channels");
const appHooks = require("./app.hooks");
const middleware = require("./middleware")

const app = express(feathers());
app.configure(configuration());

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.errorHandler());

app.configure(express.rest());

app.configure(authentication);
app.configure(services);
app.configure(channels);
app.configure(middleware)

app.use(express.notFound());

app.hooks(appHooks);

module.exports = app;
