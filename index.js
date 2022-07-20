const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
const router = require('./routes');

app.use("/api", router);

app.listen(PORT, () => console.log(`listening on http://localhost:${PORT}`));
