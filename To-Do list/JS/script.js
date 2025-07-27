let todoForm = document.getElementById("todo-form");
let todoInput = document.getElementById("todo-input");
let todoList = document.getElementById("todo-list");

todoList.innerHTML = localStorage.getItem("todoList");
addListener();

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
    <button class="delete-btn">Remove</button>
    <button class="done-btn">Done</button>`;

    li.querySelector(".delete-btn").addEventListener("click", function () {
        li.remove();
        localStorage.setItem("todoList", todoList.innerHTML);
    });

    li.querySelector(".done-btn").addEventListener("click", function () {
        li.classList.toggle("done");
        localStorage.setItem("todoList", todoList.innerHTML);

    });

    todoList.appendChild(li);
    localStorage.setItem("todoList", todoList.innerHTML);

}

function addListener() {
    let items = todoList.querySelectorAll("li");
    items.forEach(li => {
        li.querySelector(".delete-btn")?.addEventListener("click", function () {
            li.remove();
            localStorage.setItem("todoList", todoList.innerHTML);
        });
        li.querySelector(".done-btn").addEventListener("click", function () {
            li.classList.toggle("done");
            localStorage.setItem("todoList", todoList.innerHTML);
        });
    });
}