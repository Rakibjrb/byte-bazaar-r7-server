const Trending = require("../../../models/trending/trending");

const getTrending = async (req, res) => {
  const sort = req.query.sort;
  if (sort === "asc" || sort === "desc") {
    const trendBySort = await Trending.find({ category: "trending" }).sort({
      votes: sort,
    });
    res.send(trendBySort);
    return;
  }
  const trending = await Trending.find({
    category: "trending",
  });
  res.send(trending);
};

module.exports = getTrending;
