var express = require("express");
const { registerUser, allUsers } = require("../controllers/userController");
const { authUser } = require("../controllers/userController");
const { protect } = require("../middleware/authMiddleware");
var router = express.Router();

/* GET users listing. */
router.route("/").get(protect, allUsers);
router.route("/").post(registerUser);
router.post("/login", authUser);
module.exports = router;
