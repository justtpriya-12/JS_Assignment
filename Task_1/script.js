const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function renderTasks() {
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        const li = document.createElement("li");

        const span = document.createElement("span");
        span.classList.add("task-text");
        span.textContent = task;
        li.appendChild(span);

       
        const editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.addEventListener("click", () => editTask(index));
        li.appendChild(editBtn);

        
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", () => deleteTask(index));
        li.appendChild(deleteBtn);

        taskList.appendChild(li);
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}


function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    tasks.push(taskText);
    taskInput.value = "";
    renderTasks();
}


function editTask(index) {
    const newTask = prompt("Edit your task:", tasks[index]);
    if (newTask !== null && newTask.trim() !== "") {
        tasks[index] = newTask.trim();
        renderTasks();
    }
}


function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}


addBtn.addEventListener("click", addTask);


renderTasks();
