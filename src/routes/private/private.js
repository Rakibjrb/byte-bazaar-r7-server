const acceptpending = require("../../controllers/api/private/acceptpending");
const getPendingProducts = require("../../controllers/api/private/getallpendingproducts");

const router = require("express").Router();

router.get("/api/getprendingproducts/:email", getPendingProducts);
router.patch("/api/acceptpending/:id", acceptpending);

module.exports = router;
