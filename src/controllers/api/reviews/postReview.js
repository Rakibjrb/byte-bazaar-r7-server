const Reviews = require("../../../models/reviews/reviews");

const postReview = async (req, res, next) => {
  const newdata = req.body;
  const query = { productId: req.params.id };
  try {
    const review = await Reviews.findOne(query);
    res.send(review);
  } catch (error) {
    next(error);
  }
};
module.exports = postReview;
