const express = require("express");
const { signup, signin, tokenverify } = require("../controller/auth.controller");
const auth = express.Router();

auth.post("/signup",signup);
auth.post("/signin",signin);
auth.get("/verifytoken",tokenverify);
module.exports = auth ; 