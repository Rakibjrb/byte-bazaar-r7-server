const jwt = require("jsonwebtoken");
require("dotenv").config();

const createToken = async (req, res, next) => {
  const info = req.body;
  try {
    const token = jwt.sign(info, process.env.TOKEN_SECRETE, {
      expiresIn: "1h",
    });
    res.send({ token: token });
  } catch (error) {
    next(error);
  }
};

module.exports = createToken;
