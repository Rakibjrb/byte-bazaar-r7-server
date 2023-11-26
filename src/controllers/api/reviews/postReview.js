const AllProduct = require("../../../models/allproduct/allproduct");

const postReview = async (req, res, next) => {
  const newdata = req.body;
  const query = { productId: req.params.id };
  try {
    const review = await AllProduct.findOne(query);
    res.send(review);
  } catch (error) {
    next(error);
  }
};
module.exports = postReview;
