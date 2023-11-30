const AllProduct = require("../../../models/allproduct/allproduct");

const topvotedforslider = async (req, res, next) => {
  try {
    const allproduct = await AllProduct.find(
      { status: "Approved", votes: { $gte: 10 } },
      "_id img name votes"
    );
    res.send(allproduct);
  } catch (error) {
    next(error);
  }
};

module.exports = topvotedforslider;
