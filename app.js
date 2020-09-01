const express = require("express");
const path = require("path");
const rfs = require("rotating-file-stream");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const routes = require("./routes/routes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// create a rotating write stream
var accessLogStream = rfs.createStream("access.log", {
  interval: "1d", // rotate daily
  path: path.join(__dirname, "logs"),
});

app.use(logger("dev", { stream: accessLogStream }));

app.use("/", routes);

module.exports = app;
