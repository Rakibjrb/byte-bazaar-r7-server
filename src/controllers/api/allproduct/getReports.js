const Report = require("../../../models/allproduct/report");
const Users = require("../../../models/users/users");

const getAllReports = async (req, res, next) => {
  const email = req.params.email;
  try {
    const checkAdmin = await Users.findOne({ email });
    if (checkAdmin.role === "Admin") {
      const reportedproducts = await Report.find({});
      res.send(reportedproducts);
      return;
    }
    if (email) {
      const allreports = await Report.find({
        "reportedUser.email": email,
      });
      res.send(allreports);
      return;
    }
    res.send({ success: false });
  } catch (error) {
    next(error);
  }
};

module.exports = getAllReports;
