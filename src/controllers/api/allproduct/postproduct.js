const AllProduct = require("../../../models/allproduct/allproduct");

const postnewproduct = async (req, res, next) => {
  const productdata = req.body;
  try {
    const addedtheproduct = await AllProduct.create(productdata);
    res.send(addedtheproduct);
  } catch (error) {
    next(error);
  }
};

module.exports = postnewproduct;
