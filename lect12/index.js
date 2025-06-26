const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;

app.use(express.json()); // axios sends the json data
app.use(express.urlencoded({ extended: true })); // post request by default 
app.use(express.static(path.join(__dirname, 'public'))); // public folder ko bhejega

let Todos = [
    // {
    //     task:"something",
    //     completed:false
    // }
];

app.post("/add-todo",(req,res)=>{
    const task = req.body.task;
    Todos.push({task:task,completed:false});
    res.status(201).json({Todos});
})

app.get("/all-todos",(req,res)=>{
    res.status(200).json({Todos})
})

app.listen(PORT, () => {
    console.log(`http://localhost:` + PORT);
});