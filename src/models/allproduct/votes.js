const { model, Schema } = require("mongoose");

const voteSchema = new Schema({
  productId: { type: String, required: true },
  votes: { type: String, required: true },
  useremail: { type: String, required: true },
});

const Votes = model("Votes", voteSchema, "votes");
module.exports = Votes;
