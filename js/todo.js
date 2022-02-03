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
    li.id = newToDo.id;
    const span = document.createElement("span");
    span.innerHTML = newToDo.text;
    const button = document.createElement("button");
    button.addEventListener("click", deleteToDo);
    button.innerHTML = "X";
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

//function filterFunc(item){return item.id !== li.id;}

function deleteToDo(event){
    //console.dir(event.target);
    const li = event.target.parentElement;
    li.remove();
    //toDos.filter((item)=> item.id != li.id);
    //const value = event.composedPath()[1];
    //const text = value.querySelector("span").innerHTML;
    //localStorage.removeItem(text);
    //value.remove();
    //console.log(toDos.splice(toDos.indexOf(text), 1));
    //saveToDos();
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const newToDoObj = {
        text: newToDo,
        id: Date.now(),
    }
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos(); 
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(saveToDos !== null){
    const parseToDos = JSON.parse(savedToDos);
    toDos = parseToDos;
    parseToDos.forEach((item)=>paintToDo(item));
}