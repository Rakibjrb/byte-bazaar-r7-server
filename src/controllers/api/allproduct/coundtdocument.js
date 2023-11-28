const AllProduct = require("../../../models/allproduct/allproduct");

const countApprevedProduct = async (_req, res, next) => {
  try {
    const totaldoc = await AllProduct.estimatedDocumentCount({
      status: "Approved",
    });
    res.send({ totalDocuments: totaldoc });
  } catch (error) {
    next(error);
  }
};

module.exports = countApprevedProduct;
