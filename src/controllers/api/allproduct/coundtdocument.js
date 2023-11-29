const AllProduct = require("../../../models/allproduct/allproduct");

const countApprevedProduct = async (_req, res, next) => {
  try {
    const totaldoc = await AllProduct.find({
      status: "Approved",
    });
    res.send({ totalDocuments: totaldoc.length });
  } catch (error) {
    next(error);
  }
};

module.exports = countApprevedProduct;
