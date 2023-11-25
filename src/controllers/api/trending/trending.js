const Trending = require("../../../models/trending/trending");

const getTrending = async (req, res) => {
  const sort = req.query.sort;
  const query = { category: "trending" };
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
};

module.exports = getTrending;
