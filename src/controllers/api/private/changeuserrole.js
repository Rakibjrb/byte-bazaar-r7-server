const Users = require("../../../models/users/users");

const changeUserRole = async (req, res, next) => {
  const reqemail = req.params.email;
  const changedData = req.body;
  try {
    const checkAdmin = await Users.findOne({ email: reqemail });
    if (checkAdmin.role !== "Admin") {
      res.send({ message: "unauthorized access" });
      return;
    }
    const changedRole = await Users.updateOne(
      { _id: changedData.id },
      { $set: { role: changedData.role } }
    );
    res.send(changedRole);
  } catch (error) {
    next(error);
  }
};

module.exports = changeUserRole;
