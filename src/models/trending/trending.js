const { model, Schema } = require("mongoose");

const trendingSchema = new Schema({});

const Trending = model("Trending", trendingSchema, "products");
module.exports = Trending;
