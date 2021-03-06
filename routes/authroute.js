const router = require("express").Router();
const authController = require("../controllers/api/AuthController");

router.get("/", authController.index);
router.post("/register", authController.register);
router.post("/login", authController.login);

module.exports = router;
