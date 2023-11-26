const AllProduct = require("../../../models/allproduct/allproduct");
const Votes = require("../../../models/allproduct/votes");

const vote = async (req, res, next) => {
  const voteData = req.body;
  try {
    const updatedVote = await AllProduct.updateOne(
      { _id: voteData.productId },
      { $set: { votes: voteData.votes } }
    );
    if (updatedVote.modifiedCount > 0) {
      const addedVotes = await Votes.create(voteData);
      res.send(addedVotes);
      return;
    }
    res.send({ success: false });
  } catch (error) {
    next(error);
  }
};

module.exports = vote;
