require("dotenv").config();
const cors = require("cors");
const createToken = require("./jwt/token");

const middlewares = (app, express) => {
  app.use(
    cors({
      origin: [process.env.PROD_ORIGIN, process.env.SECOND_PROD_ORIGIN],
      credentials: true,
    })
  );
  app.use(express.json());
  app.post("/api/create-token", createToken);
};

module.exports = middlewares;
