const mongoose = require('mongoose')
const authModel = require('../models/auth.model');
const jwt = require('jsonwebtoken');

const signup = async(req,res)=>{
    console.log(req.body);
    const newUser = new authModel({
        fullname:req.body.fullname,
        email:req.body.email,
        password:req.body.password
    })
    console.log(newUser)
    try {
        await authModel.create(newUser);
        res.send({message:"signup successful",status:true});
    } catch (error) {
        console.log(error)
        if(error){
            res.send({message:"signup not succesful",status:false});
        }
    }
}

const signin = async (req,res)=>{
    console.log(req.body);
    let {password,email} = req.body
    console.log(email,password)
    let user =  await authModel.findOne({email:email})
    console.log(user);
    try {
        if(!user){
            res.send({message:"invalid Email",status:false})
        } else if(user){
            user.validatePassword(password,(err,same)=>{
                if(err){
                  res.send({message:"Server Error",status:false})
             }else{
                if(same){
                    let token =jwt.sign({email},"secret",{expiresIn:"1h"})
                       console.log(token)
                    res.send({message:"User Signed in Successfully",status:true,token,userId:user._id,email:user.email})
                 }else{
                      res.send({message:"Wrong Password",status:false})
                 }
                }
            })
        }
    } catch (error) {
        
        res.send({message:"signin not successfull",status:false})
    }
    
    //     if(err){
    //     }else{
    //         if(user){
    //             user.validatePassword(password,(err,same)=>{
    //                 
    //                 }
    //             })
    //             // res.send({message:"Email Exists",status:true})
    //         }else{
    //            
    //         }
    //     }
    // })
}

module.exports = {signup, signin};