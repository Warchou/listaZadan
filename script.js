const UpdateTaskCounter = () => {
    let length = document.querySelectorAll("ul li").length;
    taskCounter.textContent = "Liczba zadań: "+ length;
};

const removeTask = (e) => {
    e.target.parentElement.remove();
    UpdateTaskCounter();
    if(!serchInProgres) li = document.querySelectorAll('.quests li');
};

const addTask = (e) => {
    e.preventDefault();
    const newTaskTitle = newTaskInput.value;
    const newTask = document.createElement('li');
    const text = document.createElement('div');
    text.classList.add('text');
    text.textContent = newTaskTitle;
    const close = document.createElement('div');;
    close.classList.add('close');
    close.textContent = "X";
    newTask.appendChild(text);
    newTask.appendChild(close);
    newTask.addEventListener('click', removeTask);
    ul.appendChild(newTask);
    UpdateTaskCounter();
    li = document.querySelectorAll('.quests li');
};

const searchTask = (e) =>{
    if(e.target.value){serchInProgres = false};
    serchInProgres = true;
    const searchText = e.target.value.toLowerCase();
    let table = [...li];
    table = table.filter(li => li.textContent.toLowerCase().includes(searchText) )
    ul.textContent = "";
    table.forEach( item => {
        ul.appendChild(item);
    });
}
let serchInProgres = false;
let li = document.querySelectorAll('.quests li');
const input = document.querySelector('input');
const ul = document.querySelector('.quests');

const taskCounter = document.querySelector(".liczbaZadan");

const newTaskInput = document.querySelector("form input");
const form = document.querySelector("form");

document.querySelectorAll('li .close').forEach(item => item.addEventListener('click', removeTask))

form.addEventListener("submit", addTask);

document.addEventListener('onload', UpdateTaskCounter());

input.addEventListener('input', searchTask);