require("dotenv").config();
const cors = require("cors");
const createToken = require("./jwt/token");
const clearCookie = require("./jwt/clearcookie");

const middlewares = (app, express) => {
  app.use(
    cors({
      origin: process.env.ORIGIN,
      credentials: true,
    })
  );
  app.use(express.json());
  app.post("/api/create-token", createToken);
  app.get("/api/clear-cookie", clearCookie);
};

module.exports = middlewares;
