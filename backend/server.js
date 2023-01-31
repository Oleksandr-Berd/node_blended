require("colors");
const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const connectDb = require("../config/db");

const app = express();

dotenv.config({
  path: path.join(__dirname, "../", "config", ".env"),
});

app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use("/api/v1", require("./routes/moviesRoutes"));
app.use(require("./middlewares/badUrl"));
app.use(require("../backend/middlewares/errorHandler"));

const { PORT } = process.env;

(async () => {
  await connectDb();
})();

app.listen(PORT, () => {
  console.log(`Hello in backend on port ${PORT}!`.cyan);
});
