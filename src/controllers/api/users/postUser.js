const Users = require("../../../models/users/users");

const postNewUserToDB = async (req, res, next) => {
  const userData = req.body;
  try {
    const checkedUser = await Users.findOne({ email: userData.email });
    if (checkedUser) {
      console.log("from checker : ", checkedUser);
      res.send({ success: true });
      return;
    }
    await Users.create(userData);
    res.send({ success: true });
  } catch (error) {
    next(error);
  }
};

module.exports = postNewUserToDB;
