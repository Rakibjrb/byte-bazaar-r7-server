const { model, Schema } = require("mongoose");

const usersSchema = new Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  email: { type: String, required: true },
  date: { type: String, required: true },
  subscription: { type: String, required: true },
});

const Users = model("Users", usersSchema, "users");
module.exports = Users;
