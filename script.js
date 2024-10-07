const todoValue = document.getElementById("todoText"),
      listItems = document.getElementById("list-items"),
      addUpdateClick = document.getElementById("AddUpdateClick");
let updateText = null;

todoValue.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        addUpdateClick.click();
    }
});

addUpdateClick.addEventListener("click", function() {
    if (updateText) {
        UpdateOnSelectionItems();
    } else {
        CreateToDoData();
    }
});

function CreateToDoData() {
    if (todoValue.value === "") {
        alert("Please put your task!");
        todoValue.focus();
        return; 
    }

    let li = document.createElement("li");
    const todoItems = `<div ondblclick="CompleteTodoItem(this)">${todoValue.value}</div>
                       <div>
                           <img class="edit todo-settings" onclick="UpdateToDoItems(this)" src="sticky-pencil.png"/> 
                           <img class="edit todo-settings" onclick="DeleteToDoItems(this)" src="sticky-remove.png"/>
                       </div>`;
    
    li.innerHTML = todoItems;
    listItems.appendChild(li);
    todoValue.value = ""; 
    updateText = null;
}

function CompleteTodoItem(e) {
    const taskDiv = e.parentElement.querySelector("div");
    taskDiv.style.textDecoration = taskDiv.style.textDecoration === "" ? "line-through" : "";
}

function UpdateOnSelectionItems() {
    if (updateText) {
        if (todoValue.value.trim() === "") {
            alert("Please put your task!");
            todoValue.focus();
            return;
        }
        updateText.innerText = todoValue.value;
        todoValue.value = "";
        addUpdateClick.innerHTML = '+';
        updateText = null;
    }
}

function UpdateToDoItems(e) {
    const taskDiv = e.parentElement.parentElement.querySelector("div");
    todoValue.value = taskDiv.innerText;
    updateText = taskDiv;
    addUpdateClick.innerHTML = '<img src="sticky-refresh.png" alt="Refresh" class="refresh-button"/>';
}

function DeleteToDoItems(e) {
    const li = e.parentElement.parentElement;
    li.remove();
}
