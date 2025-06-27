const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
require('dotenv').config()
const PORT = 4000;

app.use(express.json());
app.use(express.static(path.join(__dirname,"public")));

mongoose.connect(process.env.DATABASE_URL).then(()=>{
  console.log("DB connected");
}).catch((error)=>{
  console.log(error);
})


app.listen(PORT,()=>{
  console.log(`live on ${PORT}`);
})