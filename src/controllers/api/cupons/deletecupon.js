const Cupon = require("../../../models/cupon/cupon");

const deletecupon = async (req, res, next) => {
  const cuponId = req.params.id;
  try {
    const deletedcupon = await Cupon.deleteOne({ _id: cuponId });
    res.send(deletedcupon);
  } catch (error) {
    next(error);
  }
};

module.exports = deletecupon;
