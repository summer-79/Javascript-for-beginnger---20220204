const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = toDoForm.querySelector("input");

function handleToDoSubmit(event){
    event.preventDefault();
    const toDo = toDoInput.value;
    localStorage.setItem(toDo, toDo);
    const toDoElement = document.createElement("li");
    toDoElement.innerHTML = toDo;
    toDoList.appendChild(toDoElement);
    toDoInput.value = "";
}

toDoForm.addEventListener("submit", handleToDoSubmit);


