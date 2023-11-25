const getReviews = require("../../controllers/api/reviews/reviews");

const router = require("express").Router();

router.get("/api/reviews/:id", getReviews);

module.exports = router;
