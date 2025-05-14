let taskList=document.getElementById("taskList")
let tasks=JSON.parse(localStorage.getItem("tasks")) || []

function displyTasks(){
    taskList.innerHTML=""
    tasks.forEach((task,index)=> {
        let li=document.createElement("li")
        li.className=task.done?"done":""
        li.innerHTML=`
          <span onclick=toggleTask(${index})>${task.text}</span>
          <button class="delete-btn" onclick="deleteTask(${index})">Delete</button>
        `
        taskList.appendChild(li)
    });
}
function addTask(){
    let text=document.getElementById("taskInput").value.trim()
    if(text!=null){
        tasks.push({text:text,done:false}) 
    }
    updateLocalStorage();
    document.getElementById("taskInput").value=""
    displyTasks()
}
function updateLocalStorage(){
    localStorage.setItem("tasks",JSON.stringify(tasks))
}
function deleteTask(index){
  tasks.splice(index,1);
  updateLocalStorage()
  displyTasks()
}
function toggleTask(index){
    tasks[index].done=!tasks[index].done;
    updateLocalStorage()
    displyTasks()
}
displyTasks()
