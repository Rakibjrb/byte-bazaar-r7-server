const Users = require("../../../models/users/users");
const Votes = require("../../../models/allproduct/votes");

const getallvotesforadmin = async (req, res, next) => {
  const email = req.params.email;
  try {
    const checkAdmin = await Users.findOne({ email });
    if (checkAdmin.role === "Admin") {
      const allVotesForAdmin = await Votes.find({});
      res.send(allVotesForAdmin);
      return;
    }
  } catch (error) {
    next(error);
  }
};

module.exports = getallvotesforadmin;
