const AllProduct = require("../../../models/allproduct/allproduct");

const getAllProducts = async (req, res) => {
  const id = req.params.id;
  const searched = req.query.search;

  if (searched) {
    const query = { tags: searched };
    const foundedProduct = await AllProduct.find(
      query,
      "_id img name time tags votes"
    );
    res.send(foundedProduct);
    return;
  }

  if (id === "all") {
    const allproduct = await AllProduct.find(
      {},
      "_id img name time tags votes"
    );
    res.send(allproduct);
    return;
  }
  res.send([]);
};
module.exports = getAllProducts;
