const router = require("express").Router();
const getAllProducts = require("../../controllers/api/allproduct/allproduct");
const getallvotes = require("../../controllers/api/allproduct/getallvotes");
const getVotes = require("../../controllers/api/allproduct/getvote");
const reportProduct = require("../../controllers/api/allproduct/report");
const singleProduct = require("../../controllers/api/allproduct/singleproduct");
const vote = require("../../controllers/api/allproduct/vote");

router.get("/api/product/:id", getAllProducts);
router.get("/api/single-product/:id", singleProduct);
router.post("/api/vote", vote);
router.get("/api/vote", getVotes);
router.get("/api/getallvotes/:email", getallvotes);
router.post("/api/report", reportProduct);

module.exports = router;
