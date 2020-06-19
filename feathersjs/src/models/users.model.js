const mongoose = require("mongoose");

module.exports = function (app) {
  const Schema = mongoose.Schema;
  const UsersSchema = new Schema({
    email: {
      type: String,
      index: true,
      unique: true,
      required: [true, "can't be blank"],
      match: [/\S+@\S+\.\S+/, "is invalid"],
    },
    username: {
      type: String,
      index: true,
      required: [true, "can't be blank"],
      match: [/^[a-zA-Z0-9_-]+$/, "is invalid"],
    },
    password: String,
    image: String,
    // followingList: [Shema.Types.ObjectId],
  });
  const Model = mongoose.model("users", UsersSchema);
  return Model;
};
