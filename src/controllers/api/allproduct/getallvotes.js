const Votes = require("../../../models/allproduct/votes");
const Users = require("../../../models/users/users");

const getallvotes = async (req, res, next) => {
  const email = req.params.email;
  try {
    if (email === "undefined" || email === "null") {
      res.send([]);
      return;
    }
    const checkAdmin = await Users.findOne({ email });
    if (checkAdmin.role === "Admin") {
      const allVotesForAdmin = await Votes.find({});
      res.send(allVotesForAdmin);
      return;
    }
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
