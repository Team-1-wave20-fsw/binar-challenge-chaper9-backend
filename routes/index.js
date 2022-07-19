const router = require("express").Router();
const authRouter = require("./authroute");
const restrict = require("../middlewares/restrict");

router.use("/", authRouter);

module.exports = router;
