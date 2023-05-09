const express = require('express');
const { newblog } = require('../controller/blog.controller');
const blog = express.Router()

blog.post("/addnewblog",newblog);

module.exports=blog;