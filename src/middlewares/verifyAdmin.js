const Users = require("../models/users/users");

const verifyAdmin = async (req, res, next) => {
  const decodedEmail = req.decoded.email;
  const query = { email: decodedEmail };
  try {
    const user = await Users.findOne(query);
    if (user.role !== "Admin") {
      return res.status(403).send({ message: "access denied" });
    }
    next();
  } catch (error) {
    res.send({ message: "something went wrong" });
  }
};

module.exports = verifyAdmin;
