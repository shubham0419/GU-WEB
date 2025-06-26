const path = require('path');
const express = require('express');
const app = express();
const { v4: uuidv4 } = require('uuid');
const PORT = 4444;

app.use(express.json()); // axios sends the json data
app.use(express.urlencoded({ extended: true })); // post request by default 
app.use(express.static(path.join(__dirname, 'public'))); // public folder ko bhejega

let Todos = [
    // {
    //     id:"";
    //     task:"something",
    //     completed:false
    // }
];
app.post("/add-todo",(req,res)=>{
    const task = req.body.task;
    Todos.push({task:task,completed:false,id:uuidv4()});
    res.status(201).json({Todos});
})

app.delete("/todo/:id",(req,res)=>{
    const id = req.params.id;
    Todos = Todos.filter((todo)=>{
        return todo.id != id;
    })
    res.status(200).json({Todos});
})

app.put("/todo/:id",(req,res)=>{
    const id = req.params.id;
    Todos = Todos.map((todo)=>{
        if(todo.id == id){
            return {
                ...todo,
                completed:!(todo.completed)
            }
        }
        return todo;
    })
    res.status(200).json({Todos});
})

app.delete("/clear-complete",(req,res)=>{
    Todos = Todos.filter((todo)=>{
        return todo.completed==false;
    })
    res.status(200).json({Todos});
})

app.get("/all-todos",(req,res)=>{
    res.status(200).json({Todos})
})

app.listen(PORT, () => {
    console.log(`http://localhost:` + PORT);
});