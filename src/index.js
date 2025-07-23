import "./style.css";
import {addProject, setH, updateProjectOption} from "./project";
import {addTodo, display, deleteTodo, editTodo} from "./todo";


const addProjectButton = document.querySelector(".addProjectButton");
const addProjectTable = document.querySelector(".addProjectTable");
const submitP = document.querySelector("#submitP");

window.addEventListener("load", ()=>{
    updateProjectOption("Project1");
    display();
})

addProjectButton.addEventListener("click", () => {
    addProjectTable.style.display = 'flex';
})

submitP.addEventListener("click", () => {
    addProjectTable.style.display = 'none';
    addProject();
})

const project = document.querySelector("#projects");
project.addEventListener("change", (event) => {
    setH(event.target.value);
    display();
})




const addTodoButton = document.querySelector(".addTodoButton");
const addTodoTable = document.querySelector(".addTodoTable");
const submitT = document.querySelector("#submitT");


addTodoButton.addEventListener("click", () => {
    addTodoTable.style.display = 'flex';
})

submitT.addEventListener("click", () => {
    addTodo();
    addTodoTable.style.display = 'none';
})



document.addEventListener('DOMContentLoaded', () => {
    const todosDiv = document.querySelector('.todos');

    todosDiv.addEventListener('click', (event) => {
        const todoItem = event.target.closest('.todo-item');
        if (!todoItem) return;

        const id = parseInt(todoItem.dataset.id);
        if (isNaN(id)) return;

        if (event.target.classList.contains('edit')) {
            addTodoTable.style.display = 'flex';
            editTodo(id);
        } else if (event.target.classList.contains('delete')) {
            deleteTodo(id);
        }
    });
});