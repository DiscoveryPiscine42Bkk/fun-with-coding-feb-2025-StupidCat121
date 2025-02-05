document.addEventListener("DOMContentLoaded", () => {
    const todoContainer = document.getElementById("ft_list");
    const newButton = document.getElementById("newTodoButton");

    newButton.addEventListener("click", addNewTodo);
    loadTodos();

    function addNewTodo() {
        const todoText = prompt("Enter your new TO DO:");
        if (todoText) {
            createTodoElement(todoText);
            saveTodos();
        }
    }

    function createTodoElement(text) {
        const todoDiv = document.createElement("div");
        todoDiv.innerText = text;
        todoDiv.className = "todo-item";
        todoDiv.addEventListener("click", () => {
            if (confirm("Do you want to remove this TO DO?")) {
                todoDiv.remove();
                saveTodos();
            }
        });
        todoContainer.insertBefore(todoDiv, todoContainer.firstChild);
    }

    function saveTodos() {
        const todos = Array.from(todoContainer.children).map(todo => todo.innerText);
        document.cookie = `todos=${JSON.stringify(todos)};path=/`; 
    }

    function loadTodos() {
        const cookies = document.cookie.split("; ").find(row => row.startsWith("todos="));
        if (cookies) {
            const todos = JSON.parse(cookies.split("=")[1]);
            todos.forEach(todo => createTodoElement(todo));
        }
    }
});
