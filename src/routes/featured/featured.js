const router = require("express").Router();
const featuredProducts = require("../../controllers/api/featured/featured");

router.get("/api/featured", featuredProducts);

module.exports = router;
