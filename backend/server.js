const express = require("express");
const dotenv = require("dotenv");
const path = require("path");

const app = express();

dotenv.config({
  path: path.join(__dirname, "../", "config", ".env"),
});

const { PORT } = process.env;

app.listen(PORT, () => {
  console.log(`Hello in backend on port ${PORT}!`);
});
