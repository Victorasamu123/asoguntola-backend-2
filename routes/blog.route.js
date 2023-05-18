const express = require('express');
const { newblog, getblogs, deleteBlogs } = require('../controller/blog.controller');
const { getSocials } = require('../controller/getblogs.controller');
const blog = express.Router()

blog.post("/addnewblogs",newblog);
blog.get("/getblogs",getblogs);
blog.post("/deleteblog",deleteBlogs);
blog.get('/getsocials',getSocials);
module.exports=blog;