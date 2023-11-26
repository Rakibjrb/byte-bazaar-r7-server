const postNewUserToDB = require("../../controllers/api/users/postUser");

const router = require("express").Router();

router.post("/api/user", postNewUserToDB);

module.exports = router;
