const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const blogSchema = new Schema({}, { strict: false })

const blogModel = mongoose.model("asoguntola-blog-post_collections",blogSchema);

module.exports= blogModel;