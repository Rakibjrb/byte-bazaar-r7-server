const router = require("express").Router();
const getAllProducts = require("../../controllers/api/allproduct/allproduct");
const singleProduct = require("../../controllers/api/allproduct/singleproduct");

router.get("/api/product/:id", getAllProducts);
router.get("/api/single-product/:id", singleProduct);

module.exports = router;
