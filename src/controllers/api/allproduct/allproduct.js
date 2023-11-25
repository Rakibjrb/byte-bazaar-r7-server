const AllProduct = require("../../../models/allproduct/allproduct");

const getAllProducts = async (req, res) => {
  const id = req.params.id;
  const searched = req.query.search;

  if (searched) {
    const query = { tags: searched };
    const foundedProduct = await AllProduct.find(query);
    res.send(foundedProduct);
    return;
  }

  if (id === "all") {
    const allproduct = await AllProduct.find({});
    res.send(allproduct);
    return;
  }

  const oneProduct = await AllProduct.find({ _id: id });
  res.send(oneProduct);
};
module.exports = getAllProducts;
