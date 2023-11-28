const acceptpending = require("../../controllers/api/private/acceptpending");
const changeUserRole = require("../../controllers/api/private/changeuserrole");
const getPendingProducts = require("../../controllers/api/private/getallpendingproducts");
const getallusers = require("../../controllers/api/private/getallusers");

const router = require("express").Router();

router.get("/api/getprendingproducts/:email", getPendingProducts);
router.patch("/api/acceptpending/:id", acceptpending);
router.get("/api/get-all-users/:email", getallusers);
router.patch("/api/change-user-role/:email", changeUserRole);

module.exports = router;
