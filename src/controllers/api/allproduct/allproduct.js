const AllProduct = require("../../../models/allproduct/allproduct");

const getAllProducts = async (req, res, next) => {
  const id = req.params.id;
  const searched = req.query.search;
  const searchedText = searched.toLowerCase();
  const reqemail = req.query.email;

  try {
    if (reqemail) {
      const foundedProduct = await AllProduct.find(
        { "owner.email": reqemail },
        "_id img name time tags votes status"
      );
      res.send(foundedProduct);
      return;
    }

    if (searched) {
      const query = { tags: searchedText };
      const foundedProduct = await AllProduct.find(
        query,
        "_id img name time tags votes status"
      );
      res.send(foundedProduct);
      return;
    }

    if (id === "all") {
      const allproduct = await AllProduct.find(
        { status: "Approved" },
        "_id img name time tags votes status"
      );
      res.send(allproduct);
      return;
    }
    res.send([]);
  } catch (error) {
    next(error);
  }
};
module.exports = getAllProducts;
