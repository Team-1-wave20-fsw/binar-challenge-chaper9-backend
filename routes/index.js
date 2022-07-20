const router = require("express").Router();
const users = require("./usersroutes");


router.use("/users", users);

module.exports = router;