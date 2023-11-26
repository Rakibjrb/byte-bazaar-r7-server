const AllProduct = require("../../../models/allproduct/allproduct");

const getReviews = async (req, res, next) => {
  const productId = req.params.id;
  const query = { productId };
  try {
    const data = await AllProduct.findOne(query);
    res.send(data);
  } catch (error) {
    next(error);
  }
};

module.exports = getReviews;
