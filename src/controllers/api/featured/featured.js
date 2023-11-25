const Featured = require("../../../models/featured/featured");

const featuredProducts = async (req, res, next) => {
  const sort = req.query.sort;
  const query = { category: "featured" };
  try {
    if (sort === "asc" || sort === "desc") {
      const sorted = await Featured.find(
        query,
        "_id img name time tags votes"
      ).sort({
        time: sort === "asc" ? -1 : 1,
      });

      res.send(sorted);
      return;
    }
    const featured = await Featured.find(query);
    res.send(featured);
  } catch (error) {
    next(error);
  }
};

module.exports = featuredProducts;
