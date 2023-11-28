const Cupon = require("../../../models/cupon/cupon");

const getallcupons = async (req, res, next) => {
  try {
    const allcupons = await Cupon.find({});
    res.send(allcupons);
  } catch (error) {
    next(error);
  }
};

module.exports = getallcupons;
