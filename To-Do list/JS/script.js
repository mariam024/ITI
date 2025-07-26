let todoForm = document.getElementById("todo-form");
let todoInput = document.getElementById("todo-input");
let todoList = document.getElementById("todo-list");

todoForm.addEventListener("submit", function (e) {
    e.preventDefault();
    let text = todoInput.value.trim();
    if (text !== "") {
        addTask(text);
        todoInput.value = "";
    }
})

function addTask(text) {
    let li = document.createElement("li");
    li.innerHTML = `
    <span>${text}</span>
    <button class="delete-btn" id="btn">Remove</button>
    <button class="done-btn" id="btn">Done</button>`;

    li.querySelector(".delete-btn").addEventListener("click", function () {
        li.remove();
    });

    li.querySelector(".done-btn").addEventListener("click", function () {
        li.classList.toggle("done");
    });

    todoList.appendChild(li);
}