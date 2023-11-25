const router = require("express").Router();
const getAllProducts = require("../../controllers/api/allproduct/allproduct");

router.get("/api/product/:id", getAllProducts);

module.exports = router;
