const Reviews = require("../../../models/reviews/reviews");

const getReviews = async (req, res, next) => {
  const productId = req.params.id;
  const query = { productId };
  try {
    const data = await Reviews.findOne(query);
    res.send(data);
  } catch (error) {
    next(error);
  }
};

module.exports = getReviews;
