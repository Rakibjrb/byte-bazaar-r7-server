const AllProduct = require("../../../models/allproduct/allproduct");

const getTrending = async (req, res, next) => {
  const sort = req.query.sort;
  const query = { category: "trending", status: "Approved" };
  try {
    if (sort === "asc" || sort === "desc") {
      const trendBySort = await AllProduct.find(
        query,
        "_id img name votes category"
      ).sort({
        votes: sort,
      });
      res.send(trendBySort);
      return;
    }
    const trending = await AllProduct.find(query);
    res.send(trending);
  } catch (error) {
    next(error);
  }
};

module.exports = getTrending;
