
const express = require("express");
const cors = require("cors");
const sequelize = require("./config/db");

const app = express();

app.use(cors());
app.use(express.json());

// routes
app.use("/api", require("./routes/user.routes"));

// DB sync
sequelize.sync()
  .then(() => console.log("Database connected & synced"))
  .catch(err => console.log(err));

module.exports = app;