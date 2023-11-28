const AllProduct = require("../../../models/allproduct/allproduct");

const singleProduct = async (req, res, next) => {
  const id = req?.params?.id;
  try {
    const data = await AllProduct.findOne({ _id: id });
    res.send(data);
  } catch (error) {
    next(error);
  }
};

module.exports = singleProduct;
