const mongoose = require('express');
const blogModel = require('../models/blog.model');

const newblog = async (req,res)=>{
  console.log(req.body);
  res.send({message:req.body})
}

module.exports={newblog};