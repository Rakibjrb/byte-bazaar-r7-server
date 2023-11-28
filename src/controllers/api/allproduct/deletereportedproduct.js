const Report = require("../../../models/allproduct/report");

const deleteReportedProduct = async (req, res, next) => {
  const productId = req.params.id;
  try {
    const deleted = await Report.deleteOne({ _id: productId });
    res.send(deleted);
  } catch (error) {
    next(error);
  }
};

module.exports = deleteReportedProduct;
