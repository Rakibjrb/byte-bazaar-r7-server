const router = require("express").Router();
const getTrending = require("../../controllers/api/trending/trending");

router.get("/trending", getTrending);

module.exports = router;
