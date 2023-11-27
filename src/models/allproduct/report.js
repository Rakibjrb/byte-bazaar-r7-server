const { model, Schema } = require("mongoose");

const reportSchema = new Schema({
  productId: { type: String, required: true },
  name: { type: String, required: true },
  img: { type: String, required: true },
  owner: {
    name: { type: String, required: true },
    image: { type: String, required: true },
    email: { type: String, required: true },
  },
  reportedUser: {
    name: { type: String, required: true },
    email: { type: String, required: true },
  },
});

const Report = model("Report", reportSchema, "reports");
module.exports = Report;
