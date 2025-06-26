const btnContainer = document.getElementById("btn-container")
const form = document.getElementById("todo-form");
const container = document.getElementById("container");

form.addEventListener("submit",async (e)=>{
    e.preventDefault();
    const taskText = e.target.children[0].value;
    if(taskText.trim().length==0){
        alert("Please enter valid task");
    }

    let result = await axios.post("http://localhost:4444/add-todo",{task:taskText});
    renderTodos(result.data.Todos);
})

function renderTodos(todos){
    container.innerHTML="";
    for(let todo of todos){
        let div = document.createElement("div");
        div.className = "flex w-full justify-between border p-2 rounded-md"
        div.innerHTML = `${todo.task} <div class="flex gap-2">
            <button id="complete" class="bg-green-500 px-3 py-1">Completed</button>
            <button id="delete" class="bg-red-500 px-3 py-1">Delete</button>
        </div>`
        container.append(div);
    }
}

async function getAllTodos(){
    let res = await axios.get("http://localhost:4444/all-todos");
    renderTodos(res.data.Todos)
}

getAllTodos();

btnContainer.addEventListener("click",(e)=>{
    if(e.target.id=="active" || e.target.id=="all" || e.target.id=="completed"){
        for(let btn of btnContainer.children){
            btn.classList.remove("bg-green-500")
            btn.classList.remove("text-white")
        };
        e.target.classList.add("bg-green-500");
        e.target.classList.add("text-white");
    }
    
})