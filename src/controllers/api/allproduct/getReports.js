const Report = require("../../../models/allproduct/report");

const getAllReports = async (req, res, next) => {
  const email = req.params.email;
  try {
    if (email) {
      const allreports = await Report.find({
        "reportedUser.email": email,
      });
      res.send(allreports);
      return;
    }
    res.send({ success: true });
  } catch (error) {
    next(error);
  }
};

module.exports = getAllReports;
