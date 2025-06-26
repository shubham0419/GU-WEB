const btnContainer = document.getElementById("btn-container")
const form = document.getElementById("todo-form");

form.addEventListener("submit",async (e)=>{
    e.preventDefault();
    const taskText = e.target.children[0].value;
    if(taskText.trim().length==0){
        alert("Please enter valid task");
    }

    let result = await axios.post("http://localhost:4444/add-todo",{task:taskText});
    console.log(result.data);
})

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