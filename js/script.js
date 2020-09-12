var btnSubmit = document.getElementById("btn-submit");
var btnClear = document.getElementById("btn-clear");
var btnMark = document.getElementById("btn-mark");
var btnDelete = document.getElementById("btn-delete");

var panelTodos = document.getElementById("panel-todos");
var formContent = document.getElementById("form-content");


const submitTodo = (e) => {
    e.preventDefault();
    if(formContent.value && formContent.value !== ""){
        let tempPost = document.createElement("p");
        tempPost.innerHTML = `<input type="checkbox">${formContent.value}</input>`;
        formContent.value = ""
        panelTodos.appendChild(tempPost); 
    }
}

const clearTodos = (e) => {
    e.preventDefault();
    let todos = [... document.getElementsByTagName("input")];
    todos.forEach(todo => {
        todo.checked = false
    });
}

const markTodos = (e) => {
    e.preventDefault();
    let todos = [... document.getElementsByTagName("input")];
    todos.forEach(todo => {
        todo.checked = true
    });
}

const deleteTodos = (e) => {
    panelTodos.innerHTML = "";
}


btnSubmit.addEventListener("click", submitTodo);
btnClear.addEventListener("click", clearTodos);
btnMark.addEventListener("click", markTodos);
btnDelete.addEventListener("click", deleteTodos);

