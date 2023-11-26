const express = require("express");
const app = express();
const noRoutes = require("./controllers/noRoutes");
const handleInternalServerErrors = require("./controllers/handleInternalServerErrors");
const middlewares = require("./middlewares/middlewares");
const featuredRoutes = require("./routes/featured/featured");
const trendingRoutes = require("./routes/trending/trending");
const getAllProducts = require("./routes/allproduct/allproduct");
const reviews = require("./routes/reviews/reviews");
const users = require("./routes/users/users");

//server check
app.get("/", (req, res) => {
  res.send({
    message: "Server is working fine",
    status: 200,
  });
});

//installed middlwares
middlewares(app, express);

//get all products
app.use(getAllProducts);

//featured products routes
app.use(featuredRoutes);

//trending products routes
app.use(trendingRoutes);

//user management routes
app.use(users);

//products reviews
app.use(reviews);

//internal server errors handle
app.all("*", noRoutes);
app.use(handleInternalServerErrors);

module.exports = app;
