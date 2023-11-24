const Trending = require("../../../models/trending/trending");

const getTrending = async (req, res) => {
  const trending = await Trending.find({});
  res.send(trending);
};

module.exports = getTrending;
