const Votes = require("../../../models/allproduct/votes");

const getallvotes = async (req, res, next) => {
  const email = req.params.email;
  try {
    if (email === "undefined" || email === "null") {
      res.send([]);
      return;
    }
    if (email) {
      const allvotedproducts = await Votes.find({ useremail: email });
      res.send(allvotedproducts);
      return;
    }
    res.send([]);
  } catch (error) {
    next(error);
  }
};

module.exports = getallvotes;
