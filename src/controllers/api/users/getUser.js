const Users = require("../../../models/users/users");

const getUser = async (req, res, next) => {
  const email = req.params.email;
  try {
    const userData = await Users.findOne({ email });
    res.send(userData);
  } catch (error) {
    next(error);
  }
};

module.exports = getUser;
