const AllProduct = require("../../../models/allproduct/allproduct");

const handlePagination = async (req, res, next) => {
  const skip = req.query.skip;
  const limit = req.query.limit;
  try {
    const paginationData = await AllProduct.find().skip(skip).limit(limit);
    res.send(paginationData);
  } catch (error) {
    next(error);
  }
};
module.exports = handlePagination;
