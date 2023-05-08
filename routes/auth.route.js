const express = require("express");
const { signup, signin } = require("../controller/auth.controller");
const auth = express.Router();

auth.post("/signup",signup);
auth.post("/signin",signin)
module.exports = auth ; 