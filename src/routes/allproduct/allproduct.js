const router = require("express").Router();
const getAllProducts = require("../../controllers/api/allproduct/allproduct");
const singleProduct = require("../../controllers/api/allproduct/singleproduct");
const vote = require("../../controllers/api/allproduct/vote");

router.get("/api/product/:id", getAllProducts);
router.get("/api/single-product/:id", singleProduct);
router.post("/api/vote", vote);

module.exports = router;
