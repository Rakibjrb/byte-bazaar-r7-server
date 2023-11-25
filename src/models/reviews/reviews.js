const { model, Schema } = require("mongoose");

const reviewsSchema = new Schema({});

const Reviews = model("Reviews", reviewsSchema, "reviews");
module.exports = Reviews;
