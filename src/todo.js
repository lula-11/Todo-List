function saveTodo(tasks){
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function getTodo(){
    return JSON.parse(localStorage.getItem('tasks')) || [];
}
function addTodo(){
    let title = document.querySelector("#title").value;
    let description = document.querySelector("#description").value;
    let date = document.querySelector("#date").value;
    let priority = document.querySelector("#priority").value;
    let projectValue = document.querySelector("#projects").value;

    let tasks = getTodo();
    let newTask = {
        id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1, // 自增 ID
        project: projectValue,
        title,
        description,
        date,
        priority
    };
    tasks.push(newTask);
    saveTodo(tasks);
    display();
}


function display(){
    const projectValue = document.querySelector("#projects").value;
    const todos = getTodo();
    const todosDiv = document.querySelector(".todos");

    const filteredTodos = todos.filter(todo => todo.project === projectValue);

    todosDiv.innerHTML = filteredTodos.map(todo => `
        <div class="todo-item" data-id="${todo.id}">
            <h3>${todo.title}</h3>
            <p>${todo.description}</p>
            <p>Date: ${todo.date}</p>
            <p>Priority: ${todo.priority}</p>
            <button type="button" class="edit">Edit</button>
            <button type="button" class="delete">Delete</button>
        </div>
    `).join('');


}


function editTodo(id) {
    let tasks = getTodo();
    let task = tasks.find(todo => todo.id === id);
    
    // Populate form with task data
    document.querySelector("#title").value = task.title;
    document.querySelector("#description").value = task.description;
    document.querySelector("#date").value = task.date;
    document.querySelector("#priority").value = task.priority;
    document.querySelector("#projects").value = task.project;
    
    // Remove the task to be edited
    tasks = tasks.filter(todo => todo.id !== id);
    saveTodo(tasks);
    display();
}

function deleteTodo(id) {
    let tasks = getTodo();
    tasks = tasks.filter(todo => todo.id !== id);
    saveTodo(tasks);
    display();
}


export {saveTodo, getTodo, addTodo, display, editTodo, deleteTodo}
