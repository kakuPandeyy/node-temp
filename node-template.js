const express = require('express');
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
require("dotenv").config();

app.use(cors())
app.use(express.json())
mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("db connnect succesfuly")
}).catch((err)=>{
    console.log("unable to connect" + err.message)
})
const server =  app.listen(process.env.PORT,()=>{
    console.log(`sever is runing on port ${process.env.PORT}`)
})


