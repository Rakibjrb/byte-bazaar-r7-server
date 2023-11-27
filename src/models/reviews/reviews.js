const { model, Schema } = require("mongoose");

const reviewsSchema = new Schema({
  productId: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  image: { type: String, required: true },
  rating: { type: String, required: true },
  testimonial: { type: String, required: true },
});

const Reviews = model("Reviews", reviewsSchema, "reviews");
module.exports = Reviews;
