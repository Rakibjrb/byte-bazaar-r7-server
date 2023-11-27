const getallreviews = require("../../controllers/api/reviews/getallreviews");
const postReview = require("../../controllers/api/reviews/postReview");
const getReviews = require("../../controllers/api/reviews/reviews");

const router = require("express").Router();

router.get("/api/reviews/:id", getReviews);
router.post("/api/reviews/:id", postReview);
router.get("/api/getallreviews/:email", getallreviews);

module.exports = router;
