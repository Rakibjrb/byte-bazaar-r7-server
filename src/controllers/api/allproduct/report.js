const Report = require("../../../models/allproduct/report");

const reportProduct = async (req, res, next) => {
  const data = req.body;
  try {
    const addedReport = await Report.create(data);
    res.send(addedReport);
  } catch (error) {
    next(error);
  }
};

module.exports = reportProduct;
