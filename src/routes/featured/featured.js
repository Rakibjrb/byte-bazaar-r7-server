const router = require("express").Router();
const featuredProducts = require("../../controllers/api/featured/featured");

router.get("/featured", featuredProducts);

module.exports = router;
