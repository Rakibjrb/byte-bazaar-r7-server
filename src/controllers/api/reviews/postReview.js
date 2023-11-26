const Reviews = require("../../../models/reviews/reviews");

const postReview = async (req, res, next) => {
  const data = req.body;
  try {
    const review = await Reviews.create(data);
    res.send(review);
  } catch (error) {
    next(error);
  }
};
module.exports = postReview;
