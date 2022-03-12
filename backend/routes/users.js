var express = require("express");
const { registerUser } = require("../controllers/userController");
const { authUser } = require("../controllers/userController");
var router = express.Router();

/* GET users listing. */
router.route("/").post(registerUser);

router.route("/login").post(authUser);

module.exports = router;
