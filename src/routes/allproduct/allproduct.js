const router = require("express").Router();
const getAllProducts = require("../../controllers/api/allproduct/allproduct");
const deleteproduct = require("../../controllers/api/allproduct/deleteproduct");
const getAllReports = require("../../controllers/api/allproduct/getReports");
const getallvotes = require("../../controllers/api/allproduct/getallvotes");
const getVotes = require("../../controllers/api/allproduct/getvote");
const postnewproduct = require("../../controllers/api/allproduct/postproduct");
const reportProduct = require("../../controllers/api/allproduct/report");
const singleProduct = require("../../controllers/api/allproduct/singleproduct");
const updateproduct = require("../../controllers/api/allproduct/updateproduct");
const vote = require("../../controllers/api/allproduct/vote");

router.get("/api/product/:id", getAllProducts);
router.get("/api/single-product/:id", singleProduct);
router.post("/api/vote", vote);
router.get("/api/vote", getVotes);
router.get("/api/getallvotes/:email", getallvotes);
router.post("/api/report", reportProduct);
router.get("/api/getallreports/:email", getAllReports);
router.post("/api/product", postnewproduct);
router.patch("/api/product", updateproduct);
router.delete("/api/product/:id", deleteproduct);

module.exports = router;
