const Trending = require("../../../models/trending/trending");

const getTrending = async (req, res, next) => {
  const sort = req.query.sort;
  const query = { category: "trending" };
  try {
    if (sort === "asc" || sort === "desc") {
      const trendBySort = await Trending.find(
        query,
        "_id img name votes category"
      ).sort({
        votes: sort,
      });
      res.send(trendBySort);
      return;
    }
    const trending = await Trending.find(query);
    res.send(trending);
  } catch (error) {
    next(error);
  }
};

module.exports = getTrending;
