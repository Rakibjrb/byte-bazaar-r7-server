const getallreviews = require("../../controllers/api/reviews/getallreviews");
const postReview = require("../../controllers/api/reviews/postReview");
const getReviews = require("../../controllers/api/reviews/reviews");
const verifyToken = require("../../middlewares/verifyToken");

const router = require("express").Router();

router.get("/api/reviews/:id", getReviews);
router.post("/api/reviews/:id", verifyToken, postReview);
router.get("/api/getallreviews/:email", verifyToken, getallreviews);

module.exports = router;
