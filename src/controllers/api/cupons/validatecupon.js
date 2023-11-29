const Cupon = require("../../../models/cupon/cupon");

const validateCupon = async (req, res, next) => {
  const cupon = req.body.cupon;
  try {
    if (cupon) {
      const checkCupon = await Cupon.findOne({ cupon });
      if (checkCupon) {
        res.send({ amount: checkCupon?.amount || 1 });
        return;
      }
      res.send({ message: "cupon invalid!" });
      return;
    }
    res.send({ cuponValidation: false });
  } catch (error) {
    next(error);
  }
};

module.exports = validateCupon;
