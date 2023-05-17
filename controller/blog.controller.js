const mongoose = require('express');
const blogModel = require('../models/blog.model');
const cloudinary = require("cloudinary");

cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.API_KEY, 
    api_secret: process.env.API_SECRET,
    secure:true
  });

const newblog = async (req,res)=>{
  console.log(req.body);
  const myPhoneFile=req.body.productimage
 if(myPhoneFile===""){
    let newBlogPost = new blogModel(req.body);
        try {
            blogModel.create(newBlogPost)
            res.send({message:"Blog post uploaded sucessfully",status:true});

        } catch (error) {
            if(error){
                // res.send({message:"Blog post upload not sucessful due to some errors",status:false});
            }
        }
 } else{
  cloudinary.v2.uploader.upload(myPhoneFile,(err,result)=>{
    if(err){
        console.log("File did not upload")
        res.send({message:"Blog post upload not sucessful due to some errors",status:false})

    }else{
        console.log(result.secure_url);
        const myImage= result.secure_url
        let newBlogPost = new blogModel({...req.body,productimage:myImage});
        try {
            blogModel.create(newBlogPost)
            res.send({message:"Blog post uploaded sucessfully",status:true});

        } catch (error) {
            if(error){
                // res.send({message:"Blog post upload not sucessful due to some errors",status:false});
            }
        }
    }
})
 }
}

const getblogs = async (req,res)=>{
   let blogs = await blogModel.find()
   try {
    if(blogs){
        res.send({message:"blogs niyen ooo", blogs, status:true})
    }
   } catch (error) {
    res.send({message:"An error occured", status:false})
   }
}

const deleteBlogs = async (req,res)=>{
    let ID = await req.body.fillteredArray[0]._id
    let deletedBlogs = await blogModel.findByIdAndDelete(ID)
    try {
        if(deletedBlogs){
            console.log("deleted")
            res.send({message:"item has been deleted", status:true})
        }
    } catch (error) {
        res.send({message:"An error occured", status:false})
    }
}
module.exports={newblog,getblogs,deleteBlogs};