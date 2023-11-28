const { model, Schema } = require("mongoose");

const cuponSchema = new Schema({
  cupon: { type: String, required: true },
  date: { type: String, required: true },
  description: { type: String, required: true },
  amount: { type: String, required: true },
});

const Cupon = model("Cupon", cuponSchema, "cupons");
module.exports = Cupon;
