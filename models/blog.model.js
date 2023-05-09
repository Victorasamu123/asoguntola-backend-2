const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const blogSchema = new Schema({
    productimage:{type:String},
    title:{type:String},
    decription:{type:String},
    selectedValue:{type:String},
    currentDate:{type:Object}
})

const blogModel = mongoose.model("asoguntola-blog-post_collections",blogSchema);

module.exports= blogModel;