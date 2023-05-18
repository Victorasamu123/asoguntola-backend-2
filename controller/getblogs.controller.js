const mongoose = require('express');
const blogModel = require('../models/blog.model');

const getSocials = async(req,res)=>{
    let soc = "Socials"
    let Socials = await blogModel.find({selectedValue:soc})
    try {
        if (Socials) {
            res.send({status:true,Socials});
        }else{
        res.send({status:false,message:"couldn't get it"})
        }
    } catch (error) {
        res.send({status:false,message:"an error occured"})
    }
}

const getAcademics = async(rreq,res)=>{
    let academics = "Academic/Scholar"
    let Academics = await blogModel.find({selectedValue:academics})
    try {
        if(Academics){
            res.send({status:true,Academics});
        }else{
            res.send({status:false,message:"couldn't get it"})
        }
    } catch (error) {
        res.send({status:false,message:"an error occured"})
    }
}

module.exports = {getSocials,getAcademics}