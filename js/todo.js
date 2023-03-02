const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";
const BTN_CLASSNAME = "btn";
const BTN_CLASSNAME2 = "btn-secondary";

let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();

    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newToDo){
    const li = document.createElement("li");
    li.id = newToDo.id;
    const span = document.createElement("span");
    span.innerText = `♡ ${newToDo.text}`;

    const button = document.createElement("button");
    button.innerText = `X`;
    button.classList.add(BTN_CLASSNAME);
    button.classList.add(BTN_CLASSNAME2);
    button.addEventListener("click", deleteToDo);

    // appendChild 마지막
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();

    // copy
    const newToDo = toDoInput.value;

    toDoInput.value = "";

    const newToDoObj = {
        text: newToDo,
        id: Date.now()
    };
    
    toDos.push(newToDoObj);

    paintToDo(newToDoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

// function sayHello(item){
//     console.log("This is the turn of", item);
// }

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;

    // parsedToDos.forEach(sayHello);
    parsedToDos.forEach(paintToDo);
}
