const Report = require("../../../models/allproduct/report");
const Users = require("../../../models/users/users");

const getallreportedProduct = async (req, res, next) => {
  const reqemail = req.params.email;
  try {
    const checkModerator = await Users.findOne({ email: reqemail });
    if (checkModerator.role !== "Moderator") return;
    const reporteddata = await Report.find({});
    res.send(reporteddata);
  } catch (error) {
    next(error);
  }
};

module.exports = getallreportedProduct;
