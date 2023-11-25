const Featured = require("../../../models/featured/featured");

const featuredProducts = async (req, res, next) => {
  const sort = req.query.sort;
  const query = { category: "featured" };
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
};

module.exports = featuredProducts;
