const Featured = require("../../../models/featured/featured");

const featuredProducts = async (req, res) => {
  const featured = await Featured.find({});
  res.send(featured);
};

module.exports = featuredProducts;
