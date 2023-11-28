const router = require("express").Router();
const createPaymentIntens = require("../../controllers/api/users/createpaymentintent");
const getUser = require("../../controllers/api/users/getUser");
const postNewUserToDB = require("../../controllers/api/users/postUser");
const updateSubscribe = require("../../controllers/api/users/updatesubscribe");
const verifyToken = require("../../middlewares/verifyToken");

router.post("/api/user", postNewUserToDB);
router.get("/api/user/:email", getUser);
router.post("/api/create-payment-intents", verifyToken, createPaymentIntens);
router.patch("/api/update-user-subscribe", verifyToken, updateSubscribe);

module.exports = router;
