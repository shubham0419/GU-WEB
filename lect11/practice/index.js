const express = require("express");
const app = express();
const path = require("path")
const PORT = 4000;

const TODOS = [
  {
    task:"this is task 1",
    completed:false
  }
]

app.use(express.static(path.join(__dirname,"public")))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/add-todo",(req,res)=>{
  res.redirect("addTodoForm.html");
})

app.post("/add-todo",(req,res)=>{
  console.log(req.body);
  const task = req.body.task;
  TODOS.push(
    {
      task:task,
      completed:false
    }
  )
  res.redirect("/all-todos")
})

app.get("/all-todos",(req,res)=>{
  res.status(200).json({TODOS});
})

app.listen(PORT, () => {
  console.log("Server running on port " + PORT)
});