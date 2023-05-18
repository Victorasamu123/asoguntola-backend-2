const mongoose = require('express');
const blogModel = require('../models/blog.model');

const getSocials = async(req,res)=>{
    let soc = "Socials"
    let Socials = blogModel.find({selectedValue:soc})
    console.log(Socials)
}

module.exports = {getSocials}