const userController = require("../controllers/api/UserController");
const router = require("express").Router();

/**
 * @Routes "/api/users"
 */

router.get("/score", userController.getUserScores);
router.get("/", userController.getUsers);
router.get("/:id", userController.getUserDetail);
router.put("/:id", userController.updateUser);


module.exports = router;
