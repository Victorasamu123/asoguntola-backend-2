const mongoose = require('express');
const blogModel = require('../models/blog.model');

const getSocials = async(req,res)=>{
    let soc = "Socials"
    let Socials = blogModel.find({selectedValue:soc})
    try {
        if (Socials) {
            res.send({status:true,Socials});
        }
    } catch (error) {
        res.send({status:false})
    }
}

module.exports = {getSocials}