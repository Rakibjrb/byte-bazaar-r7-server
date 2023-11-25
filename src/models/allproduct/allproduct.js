const { model, Schema } = require("mongoose");

const allproductSchema = new Schema({});

const AllProduct = model("AllProduct", allproductSchema, "products");
module.exports = AllProduct;
