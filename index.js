const express = require('express');
const app = express();
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config()
app.use(cors())
app.use(express.urlencoded({extended:true}));
app.use(express.json())
const PORT = process.env.PORT || 5000
const URI  = process.env.MONGODB_URI

const client = new MongoClient(URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
const run = async()=> {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  }
   finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
// mongoose.connect(URL,(err)=>{
//    if(err){
//     console.log(err)
//    }else{
//     console.log('mongoose don connect ope oooo')
//    }
// })

app.listen(PORT,()=>{
  console.log(`app is running at port: ${PORT}`);
})