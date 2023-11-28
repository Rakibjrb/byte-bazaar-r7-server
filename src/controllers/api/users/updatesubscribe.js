const Users = require("../../../models/users/users");

const updateSubscribe = async (req, res, next) => {
  const status = req.body;
  try {
    const subscribed = await Users.updateOne(
      { email: status.email },
      { subscription: status.status }
    );
    res.send(subscribed);
  } catch (error) {
    next(error);
  }
};

module.exports = updateSubscribe;
