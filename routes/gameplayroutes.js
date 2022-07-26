const gameplayController = require("../controllers/api/GameplayController");
const router = require("express").Router();
const restrict = require("../middlewares/restrict");

/**
 * @Routes "/api/gameplay"
 */

router.post("/add", restrict, gameplayController.addScores);

module.exports = router;
