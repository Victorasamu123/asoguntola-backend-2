const express = require('express');
const { newblog, getblogs, deleteBlogs } = require('../controller/blog.controller');
const { getSocials, getAcademics, getAirbram, getHealth, getStudent } = require('../controller/getblogs.controller');
const blog = express.Router()

blog.post("/addnewblogs",newblog);
blog.get("/getblogs",getblogs);
blog.post("/deleteblog",deleteBlogs);
blog.get('/getpersonals',getSocials);
blog.get('/getacademics',getAcademics);
blog.get('/getairbram',getAirbram);
blog.get('/gethealth',getHealth);
blog.get('/getstudents',getStudent);
module.exports=blog;