const getUser = require("../../controllers/api/users/getUser");
const postNewUserToDB = require("../../controllers/api/users/postUser");

const router = require("express").Router();

router.post("/api/user", postNewUserToDB);
router.get("/api/user/:email", getUser);

module.exports = router;
