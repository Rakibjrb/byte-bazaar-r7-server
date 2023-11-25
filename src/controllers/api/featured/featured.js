const Featured = require("../../../models/featured/featured");

const featuredProducts = async (req, res, next) => {
  const sort = req.query.sort;
  if (sort === "asc" || sort === "desc") {
    const sorted = await Featured.find({ category: "featured" }).sort({
      time: sort === "asc" ? -1 : 1,
    });

    res.send(sorted);
    return;
  }
  const featured = await Featured.find({ category: "featured" });
  res.send(featured);
};

module.exports = featuredProducts;
