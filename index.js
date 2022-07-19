const express = require("express");
const router = require("./routes");
const passport = require("./lib/passport");
const app = express();
const port = process.env.PORT || 4000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(passport.initialize());
app.use("/api", router);

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}/api`);
});
