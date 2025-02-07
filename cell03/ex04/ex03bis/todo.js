$(document).ready(function () {
    const todoContainer = $("#ft_list");
    const newButton = $("#newTodoButton");

    function loadTodos() {
        const cookie = document.cookie.split("; ").find(row => row.startsWith("todos="));
        if (cookie) {
            const todos = JSON.parse(cookie.split("=")[1]);
            todos.forEach(todo => createTodoElement(todo));
        }
    }

    function createTodoElement(text) {
        const todoDiv = $("<div>").text(text).addClass("todo-item");

        todoDiv.click(function () {
            if (confirm("Do you want to remove this TO DO?")) {
                $(this).remove();
                saveTodos();
            }
        });

        todoContainer.prepend(todoDiv);
    }

    function saveTodos() {
        const todos = $(".todo-item").map(function () { return $(this).text(); }).get();
        document.cookie = `todos=${JSON.stringify(todos)};path=/`;
    }

    newButton.click(function () {
        const todoText = prompt("Enter your new TO DO:");
        if (todoText) {
            createTodoElement(todoText);
            saveTodos();
        }
    });

    loadTodos();
});
