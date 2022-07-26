const userController = require("../controllers/api/UserController");
const router = require("express").Router();
const restrict = require("../middlewares/restrict");

/**
 * @Routes "/api/users"
 */

router.get("/score", userController.getUserScores);
router.get("/", userController.getUsers);
router.get("/:id", userController.getUserDetail);
router.put("/:id", restrict, userController.updateUser);

module.exports = router;
