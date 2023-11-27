const AllProduct = require("../../../models/allproduct/allproduct");
const Users = require("../../../models/users/users");

const getPendingProducts = async (req, res, next) => {
  const reqemail = req.params.email;
  try {
    const getRole = await Users.findOne({ email: reqemail });
    if (getRole.role === "Moderator") {
      const pendingProducts = await AllProduct.find({ status: "Pending" });
      res.send(pendingProducts);
    }
  } catch (error) {
    next(error);
  }
};
module.exports = getPendingProducts;
