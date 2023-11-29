const getallvotesforadmin = require("../../controllers/api/allproduct/getallvotesforadmin");
const acceptpending = require("../../controllers/api/private/acceptpending");
const changeUserRole = require("../../controllers/api/private/changeuserrole");
const getPendingProducts = require("../../controllers/api/private/getallpendingproducts");
const getallusers = require("../../controllers/api/private/getallusers");
const verifyAdmin = require("../../middlewares/verifyAdmin");
const verifyToken = require("../../middlewares/verifyToken");

const router = require("express").Router();

router.get("/api/getprendingproducts/:email", verifyToken, getPendingProducts);
router.patch("/api/acceptpending/:id", verifyToken, acceptpending);
router.get("/api/get-all-users/:email", verifyToken, verifyAdmin, getallusers);
router.get(
  "/api/getallvotesforadmin/:email",
  verifyToken,
  verifyAdmin,
  getallvotesforadmin
);
router.patch(
  "/api/change-user-role/:email",
  verifyToken,
  verifyAdmin,
  changeUserRole
);

module.exports = router;
