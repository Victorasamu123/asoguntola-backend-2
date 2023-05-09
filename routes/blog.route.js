const express = require('express');
const { newblog } = require('../controller/blog.controller');
const blog = express.Router()

blog.post("/addnewblogs",newblog);

module.exports=blog;