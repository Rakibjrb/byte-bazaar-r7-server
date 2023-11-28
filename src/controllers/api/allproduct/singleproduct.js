const AllProduct = require("../../../models/allproduct/allproduct");

const singleProduct = async (req, res, next) => {
  const id = req?.params?.id;
  try {
    if (id) {
      const data = await AllProduct.findOne({ _id: id });
      res.send(data);
      return;
    }
    res.send({});
  } catch (error) {
    next(error);
  }
};

module.exports = singleProduct;
