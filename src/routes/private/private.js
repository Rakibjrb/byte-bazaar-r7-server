const acceptpending = require("../../controllers/api/private/acceptpending");
const getPendingProducts = require("../../controllers/api/private/getallpendingproducts");
const getallusers = require("../../controllers/api/private/getallusers");

const router = require("express").Router();

router.get("/api/getprendingproducts/:email", getPendingProducts);
router.patch("/api/acceptpending/:id", acceptpending);
router.get("/api/get-all-users/:email", getallusers);

module.exports = router;
