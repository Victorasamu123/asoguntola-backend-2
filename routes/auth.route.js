const express = require("express");
const auth = express.Router();

auth.post("/signup",signup);

module.exports = auth ; 