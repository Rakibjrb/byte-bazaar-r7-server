const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const requestToken = req.headers.authorization;
  if (!requestToken) {
    return res.status(401).send({ message: "forbidden access" });
  }
  const token = requestToken?.split(" ")[1];
  jwt.verify(token, process.env.TOKEN_SECRETE, (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: "forbidden access" });
    }
    req.decoded = decoded;
    next();
  });
};

module.exports = verifyToken;
