const router = require("express").Router();
const addcupons = require("../../controllers/api/cupons/addcupon");
const deletecupon = require("../../controllers/api/cupons/deletecupon");
const getallcupons = require("../../controllers/api/cupons/getallcupons");
const verifyAdmin = require("../../middlewares/verifyAdmin");
const verifyToken = require("../../middlewares/verifyToken");

router.post("/api/cupon", verifyToken, verifyAdmin, addcupons);
router.get("/api/cupon", getallcupons);
router.delete("/api/cupon/:id", verifyToken, verifyAdmin, deletecupon);

module.exports = router;
