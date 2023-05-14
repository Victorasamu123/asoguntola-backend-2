const express = require('express');
const { newblog, getblogs, deleteBlogs } = require('../controller/blog.controller');
const blog = express.Router()

blog.post("/addnewblogs",newblog);
blog.get("/getblogs",getblogs);
blog.post("/deleteblog",deleteBlogs);
module.exports=blog;