const { model, Schema } = require("mongoose");

const featuredSchema = new Schema({});

const Featured = model("Featured", featuredSchema, "products");
module.exports = Featured;
