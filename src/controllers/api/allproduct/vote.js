const AllProduct = require("../../../models/allproduct/allproduct");

const vote = async (req, res, next) => {
  const id = req.body.id;
  try {
    const increasedVote = await AllProduct.updateOne(
      { _id: id },
      { $set: { votes: req.body.votes } }
    );
    res.send(increasedVote);
  } catch (error) {
    next(error);
  }
};

module.exports = vote;
