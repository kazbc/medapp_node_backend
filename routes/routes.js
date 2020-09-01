const express = require("express");
const routes = express.Router();
const forminputroute = require("../controller/form_inputs.controller");

routes.use("/form_inputs", forminputroute);

module.exports = routes;
