const router = require("express").Router();
const authRouter = require("./authroute");
const gameRouter = require("./gameroute");
const restrict = require("../middlewares/restrict");

router.use("/", authRouter);
router.use("/game", gameRouter);

module.exports = router;
