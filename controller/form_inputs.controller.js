const express = require("express");
const router = express.Router();
const model = require("../models/form_inputs");

//controller to get all form input types
router.get("/all", model.getAllInputTypes);

module.exports = router;
