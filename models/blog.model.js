const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const blogSchema = new Schema({
    productimage:{type:String, required:false},
    title:{type:String, required:false},
    decription:{type:String, required:false},
    selectedValue:{type:String, required:false},
    currentDate:{type:Object, required:false}
})

const blogModel = mongoose.model("asoguntola-blog-post_collections",blogSchema);

module.exports= blogModel;