const jwt = require("jsonwebtoken");
require("dotenv").config();

const createToken = async (req, res, next) => {
  const info = req.body;
  try {
    const token = jwt.sign(info, process.env.TOKEN_SECRETE, {
      expiresIn: "1h",
    });
    res
      .cookie("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
      })
      .send({ success: true });
  } catch (error) {
    next(error);
  }
};

module.exports = createToken;
