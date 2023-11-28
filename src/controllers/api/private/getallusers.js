const Users = require("../../../models/users/users");

const getallusers = async (req, res, next) => {
  const reqemail = req.params.email;
  try {
    const checkAdmin = await Users.findOne({ email: reqemail });
    if (checkAdmin.role !== "Admin") {
      return;
    }
    const allUsers = await Users.find({});
    res.send(allUsers);
  } catch (error) {
    next(error);
  }
};

module.exports = getallusers;
