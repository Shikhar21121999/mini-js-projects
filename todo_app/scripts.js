const input=document.getElementById("input");
const todos=document.getElementById("todos");
const form=document.getElementById("cont")
const tasks=JSON.parse(localStorage.getItem('tasks'));

if(tasks){
    tasks.forEach(task => {
        console.log(task);
        addtask(task.text,task.classname);
    })
}

function addtask (todo_text="",clssname="li_item"){
    // now we need to create a new li element with the following text
    if(todo_text){
        // that is if something is entered before pressing enter

        // we create an li element
        const todoEL=document.createElement("li");
        const res=clssname.split(" ");
        res.forEach(cll => {
            todoEL.classList.add(cll);
        })
        todoEL.innerText=todo_text;

        // a function that toggles the completed status of the todo task
        todoEL.addEventListener("click",()=>{
            // when the todoEL is clicked
            // completed is added to the class list by which its appearance changes due to css
            todoEL.classList.toggle("completed");
            updateLS();
        });

        // a function that deletes the element if element is clicked with right click
        todoEL.addEventListener("contextmenu", (e) => {
            e.preventDefault();
            todoEL.remove();
            updateLS();
        })

        todos.appendChild(todoEL);
        input.value="";
    }
}

form.addEventListener("submit", (e)=>{
    // prevents form from submitting
    e.preventDefault();

    // select the input and retrive its text value
    const todo_text=input.value;
    addtask(todo_text);
});

function updateLS(){
    // get all the li tags in document
    const li_el = document.querySelectorAll("li");
    const tasks=[];
    li_el.forEach(task => {
        const curr_task = {
            text: task.innerText, 
            classname: task.className
        };
        console.log("curr task is");
        console.log(curr_task);
        tasks.push(curr_task);
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
}