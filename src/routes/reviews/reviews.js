const postReview = require("../../controllers/api/reviews/postReview");
const getReviews = require("../../controllers/api/reviews/reviews");

const router = require("express").Router();

router.get("/api/reviews/:id", getReviews);
router.post("/api/reviews/:id", postReview);

module.exports = router;
