const gameplayController = require("../controllers/api/GameplayController");
const router = require("express").Router();

/**
 * @Routes "/api/gameplay"
 */

 router.post("/add", gameplayController.addScores);

 module.exports = router;