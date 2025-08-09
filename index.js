const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const router = require("./module/index.js");
const morgan = require("morgan");

const port = process.env.PORT || 4500;
app.use(morgan("dev"));
app.use(express.json()); // <-- Add this line
app.use("/api", router);

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
