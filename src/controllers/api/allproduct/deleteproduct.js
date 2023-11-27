const AllProduct = require("../../../models/allproduct/allproduct");

const deleteproduct = async (req, res, next) => {
  const deleteId = req.params.id;
  try {
    const deleted = await AllProduct.deleteOne({ _id: deleteId });
    res.send(deleted);
  } catch (error) {
    next(error);
  }
};

module.exports = deleteproduct;
