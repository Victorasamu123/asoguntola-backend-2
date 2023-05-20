const express = require('express');
const app = express();
const cors = require('cors');
// const { MongoClient, ServerApiVersion } = require('mongodb');
const mongoose = require('mongoose');
require('dotenv').config()
app.use(cors())
app.use(express.urlencoded({extended:true}));
app.use(express.json())
app. use(express. json({limit: '50mb'}));
const PORT = process.env.PORT || 5000
const URI  = process.env.MONGODB_URI
mongoose.set('strictQuery', false)

const connection = async()=>{
  try {
    const connection_try = await mongoose.connect(URI)
    console.log("connection to mongoose was sucessful");
  } catch (error) {
    console.log(error)
  }
}

connection();
const auth = require('./routes/auth.route');
const blog = require('./routes/blog.route');
app.use('/auth',auth);
app.use('/blog',blog);
app.listen(PORT,()=>{
  console.log(`app is running at port: ${PORT}`);
})