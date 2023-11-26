const AllProduct = require("../../../models/allproduct/allproduct");

const featuredProducts = async (req, res, next) => {
  const sort = req.query.sort;
  const query = { category: "featured" };
  try {
    if (sort === "asc" || sort === "desc") {
      const sorted = await AllProduct.find(
        query,
        "_id img name time tags votes"
      ).sort({
        time: sort === "asc" ? -1 : 1,
      });

      res.send(sorted);
      return;
    }
    const featured = await AllProduct.find(query);
    res.send(featured);
  } catch (error) {
    next(error);
  }
};

module.exports = featuredProducts;
