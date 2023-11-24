const cors = require("cors");

const middlewares = (app, express) => {
  app.use(cors());
  app.use(express.json());
};

module.exports = middlewares;
