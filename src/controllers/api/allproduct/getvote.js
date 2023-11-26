const Votes = require("../../../models/allproduct/votes");

const getVotes = async (req, res, next) => {
  const getvotedata = req.query;
  try {
    const vote = await Votes.findOne({ productId: getvotedata.productId });
    res.send(vote);
  } catch (error) {
    next(error);
  }
};
module.exports = getVotes;
