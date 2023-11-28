const Reviews = require("../../../models/reviews/reviews");
const Users = require("../../../models/users/users");

const getallreviews = async (req, res, next) => {
  const email = req.params.email;
  try {
    const checkAdmin = await Users.findOne({ email });
    if (checkAdmin.role === "Admin") {
      const getReviewsForAdmin = await Reviews.find({});
      res.send(getReviewsForAdmin);
      return;
    }
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
