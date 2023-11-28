const router = require("express").Router();
const getAllProducts = require("../../controllers/api/allproduct/allproduct");
const deleteproduct = require("../../controllers/api/allproduct/deleteproduct");
const deleteReportedProduct = require("../../controllers/api/allproduct/deletereportedproduct");
const getAllReports = require("../../controllers/api/allproduct/getReports");
const getallvotes = require("../../controllers/api/allproduct/getallvotes");
const getallreportedProduct = require("../../controllers/api/allproduct/getreportedproduct");
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
router.get("/api/all-reported-product/:email", getallreportedProduct);
router.delete("/api/delete-reported-product/:id", deleteReportedProduct);

module.exports = router;
