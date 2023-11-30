const router = require("express").Router();
const getAllProducts = require("../../controllers/api/allproduct/allproduct");
const countApprevedProduct = require("../../controllers/api/allproduct/coundtdocument");
const deleteproduct = require("../../controllers/api/allproduct/deleteproduct");
const deleteReportedProduct = require("../../controllers/api/allproduct/deletereportedproduct");
const getAllReports = require("../../controllers/api/allproduct/getReports");
const getallvotes = require("../../controllers/api/allproduct/getallvotes");
const getallreportedProduct = require("../../controllers/api/allproduct/getreportedproduct");
const getVotes = require("../../controllers/api/allproduct/getvote");
const handlePagination = require("../../controllers/api/allproduct/handlePagination");
const postnewproduct = require("../../controllers/api/allproduct/postproduct");
const reportProduct = require("../../controllers/api/allproduct/report");
const singleProduct = require("../../controllers/api/allproduct/singleproduct");
const topvotedforslider = require("../../controllers/api/allproduct/topvodedforslider");
const updateproduct = require("../../controllers/api/allproduct/updateproduct");
const vote = require("../../controllers/api/allproduct/vote");
const verifyToken = require("../../middlewares/verifyToken");

router.get("/api/product/:id", getAllProducts);
router.get("/api/topvoted-forslider", topvotedforslider);
router.get("/api/document-count", countApprevedProduct);
router.get("/api/pagination", handlePagination);
router.get("/api/single-product/:id", verifyToken, singleProduct);
router.post("/api/vote", verifyToken, vote);
router.get("/api/vote", getVotes);
router.get("/api/getallvotes/:email", getallvotes);
router.post("/api/report", verifyToken, reportProduct);
router.get("/api/getallreports/:email", verifyToken, getAllReports);
router.post("/api/product", verifyToken, postnewproduct);
router.patch("/api/product", verifyToken, updateproduct);
router.delete("/api/product/:id", verifyToken, deleteproduct);
router.get(
  "/api/all-reported-product/:email",
  verifyToken,
  getallreportedProduct
);
router.delete(
  "/api/delete-reported-product/:id",
  verifyToken,
  deleteReportedProduct
);

module.exports = router;
