const Cupon = require("../../../models/cupon/cupon");

const addcupons = async (req, res, next) => {
  const cupondata = req.body;
  try {
    const addedcupon = await Cupon.create(cupondata);
    res.send(addedcupon);
  } catch (error) {
    next(error);
  }
};

module.exports = addcupons;
