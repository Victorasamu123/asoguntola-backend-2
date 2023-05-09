const express = require('express');
const { newblog, getblogs } = require('../controller/blog.controller');
const blog = express.Router()

blog.post("/addnewblogs",newblog);
blog.get("/getblogs",getblogs)
module.exports=blog;