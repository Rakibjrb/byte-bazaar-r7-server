const Reviews = require("../../../models/reviews/reviews");

const getallreviews = async (req, res, next) => {
  const email = req.params.email;
  try {
    if (email) {
      const reviewsData = await Reviews.find({ email });
      res.send(reviewsData);
      return;
    }
    res.send({ success: false });
  } catch (error) {
    next(error);
  }
};

module.exports = getallreviews;
