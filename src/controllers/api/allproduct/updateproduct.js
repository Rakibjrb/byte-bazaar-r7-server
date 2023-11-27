const AllProduct = require("../../../models/allproduct/allproduct");

const updateproduct = async (req, res, next) => {
  const data = req.body;
  const updatedDoc = {
    name: data.name,
    img: data.img,
    price: parseInt(data.price),
    description: data.description,
  };
  try {
    const updated = await AllProduct.updateOne(
      { _id: data.productId },
      updatedDoc
    );
    res.send({ working: "fine" });
  } catch (error) {
    next(error);
  }
};

module.exports = updateproduct;
