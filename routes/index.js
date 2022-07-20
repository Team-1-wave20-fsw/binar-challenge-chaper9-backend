const router = require("express").Router();
const authRouter = require("./authroute");
const gameRouter = require("./gameroute");
const userRouter = require("./userroutes");
const restrict = require("../middlewares/restrict");

router.use("/", authRouter);
router.use("/game", gameRouter);
router.use("/users", userRouter);

module.exports = router;
