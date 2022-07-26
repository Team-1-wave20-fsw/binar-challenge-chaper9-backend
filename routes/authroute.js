const router = require("express").Router();
const authController = require("../controllers/api/AuthController");
const restrict = require("../middlewares/restrict");
router.get("/", authController.index);
router.post("/register", authController.register);
router.post("/login", authController.login);

router.all("/register", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "X-Requested-With,Content-Type,Authorization"
  );
  next();
});

router.all("/login", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "X-Requested-With,Content-Type,Authorization"
  );
  next();
});

router.get("/login", restrict, (req, res) => {
  console.log(req);
  res.status(201).json({
    fullname: req.user.dataValues.fullname,
    authorized: true,
  });
});

module.exports = router;
