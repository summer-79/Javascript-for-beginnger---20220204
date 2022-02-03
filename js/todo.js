const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = toDoForm.querySelector("input");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function paintToDo(newToDo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    li.appendChild(span);
    li.appendChild(button);
    span.innerHTML = newToDo;
    button.innerHTML = "X";
    toDoList.appendChild(li);
    button.addEventListener("click", deleteToDo);
}

function deleteToDo(event){
    //console.dir(event.target);
    const value = event.composedPath()[1];
    const text = value.querySelector("span").innerHTML;
    localStorage.removeItem(text);
    value.remove();
    console.log(toDos.splice(toDos.indexOf(text), 1));
    saveToDos();
}

function handleToDoSubmit(event){
    event.preventDefault();
    const toDo = toDoInput.value;
    toDos.push(toDo);
    localStorage.setItem(toDo, toDo);
    paintToDo(toDo);
    toDoInput.value = "";
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(saveToDos !== null){
    const parseToDos = JSON.parse(savedToDos);
    toDos = parseToDos;
    parseToDos.forEach((item)=>paintToDo(item));
}




