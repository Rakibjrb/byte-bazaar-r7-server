const Votes = require("../../../models/allproduct/votes");

const getallvotes = async (req, res, next) => {
  const email = req.params.email;
  try {
    if (email) {
      const allvotedproducts = await Votes.find({ useremail: email });
      res.send(allvotedproducts);
      return;
    }
    res.send({ success: false });
  } catch (error) {
    next(error);
  }
};

module.exports = getallvotes;
