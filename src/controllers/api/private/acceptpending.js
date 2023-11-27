const AllProduct = require("../../../models/allproduct/allproduct");

const acceptpending = async (req, res, next) => {
  const productId = req.params.id;
  const data = req.body;
  try {
    if (data.status === "Rejected") {
      const reject = await AllProduct.updateOne({ _id: productId }, data);
      res.send(reject);
      return;
    }
    if (data.status === "Approved") {
      const accepted = await AllProduct.updateOne({ _id: productId }, data);
      res.send(accepted);
      return;
    }
    if (data.category === "featured") {
      const featured = await AllProduct.updateOne({ _id: productId }, data);
      res.send(featured);
    }
  } catch (error) {
    next(error);
  }
};
module.exports = acceptpending;
