const mongoose = require('express');
const blogModel = require('../models/blog.model');

const getSocials = async(req,res)=>{
    let soc = "Personal"
    let Personals= await blogModel.find({selectedValue:soc})
    try {
        if (Personals) {
            res.send({status:true,Personals});
        }else{
        res.send({status:false,message:"couldn't get it"})
        }
    } catch (error) {
        res.send({status:false,message:"an error occured"})
    }
}

const getAcademics = async(req,res)=>{
    let academics = "Academic/Scholar"
    let Academics = await blogModel.find({selectedValue:academics});
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

const getAirbram = async (req,res)=>{
    let airbram = "AIBRAM medicals"
    let Airbram = await blogModel.find({selectedValue:airbram});
    try {
        if (Airbram) {
            res.send({status:true,Airbram})
        } else {
            res.send({status:false,message:"couldn't get it"})
        }
    } catch (error) {
        res.send({status:false,message:"an error occured"})
    }
}

const getHealth= async  (req,res)=>{
    let health  = "Health/health education/ breast care group"
    let Health = await blogModel.find({selectedValue:health});
    try {
        if(Health){
            res.send({status:true,Health})
        }else{
            res.send({status:false,message:"couldn't get it"})
        }
    } catch (error) {
        res.send({status:false,message:"an error occured"})
    }
}

const getStudent = async (req,res)=>{
    let student = "Student/Training"
    let Student = await blogModel.find({selectedValue:student});
    try {
        if(Student){
            res.send({status:true,Student})
        }else{
            res.send({status:false,message:"couldn't get it"})
        }
    } catch (error) {
        res.send({status:false,message:"an error occured"})
    }
}
module.exports = {getSocials,getAcademics,getAirbram,getHealth,getStudent}