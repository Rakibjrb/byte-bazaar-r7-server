const express = require("express");
const app = express();
const noRoutes = require("./controllers/noRoutes");
const handleInternalServerErrors = require("./controllers/handleInternalServerErrors");
const featuredRoutes = require("./routes/featured/featured");
const trendingRoutes = require("./routes/trending/trending");

//server check
app.get("/", (req, res) => {
  res.send({
    message: "Server is working fine",
    status: 200,
  });
});

//featured products routes
app.use(featuredRoutes);

//trending products routes
app.use(trendingRoutes);

//internal server errors handle
app.all("*", noRoutes);
app.use(handleInternalServerErrors);

module.exports = app;
