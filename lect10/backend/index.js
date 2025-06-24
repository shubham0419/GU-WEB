const express = require("express");
const app = express();
const PORT = 4000;

console.log("object");

app.get("/", (req,res)=>{
  res.send("hiiiii");
})

app.get("/user",(req,res)=>{
  // res.send("this is a request on '/user' ");
  let user = {
    name:"shubham",
    arr:[1,2,3,"4",true]
  }
  res.json(user);
})

app.listen(PORT,()=>{
  console.log(`app is started at port ${PORT}`);
});