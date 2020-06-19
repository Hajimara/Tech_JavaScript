const createService = require("feathers-mongoose");
const createModel = require("../../models/users.model");
const hooks = require("./usere.hooks");
const userCreateLogin = require("../../middleware/user-createlogin");

module.exports = (app) => {
  const Model = createModel(app);

  const paginate = app.get("paginate");

  const options = {
    Model,
    paginate,
  };

  app.use("/users", createService(options), userCreateLogin);

  // Get our initialized service so that we can register hooks
  const service = app.service("users");

  service.hooks(hooks);
};
