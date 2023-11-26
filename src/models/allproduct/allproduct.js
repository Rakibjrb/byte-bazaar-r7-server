const { model, Schema } = require("mongoose");

const allproductSchema = new Schema({
  img: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  votes: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  tags: {
    type: Array,
    required: true,
  },
  owner: {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    profession: {
      type: String,
      required: true,
    },
  },
});

const AllProduct = model("AllProduct", allproductSchema, "products");
module.exports = AllProduct;
