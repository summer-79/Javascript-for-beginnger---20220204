const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = toDoForm.querySelector("input");

function paintToDo(newToDO){
    const li = document.createElement("li");
    const span = document.createElement("span");
    li.appendChild(span);
    span.innerHTML = newToDO;
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const toDo = toDoInput.value;
    localStorage.setItem(toDo, toDo);
    paintToDo(toDo);
    toDoInput.value = "";
}

toDoForm.addEventListener("submit", handleToDoSubmit);


