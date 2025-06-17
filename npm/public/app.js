document.addEventListener('DOMContentLoaded', () => {
    const todoInput = document.getElementById('todoInput');
    const addTodoBtn = document.getElementById('addTodo');
    const todoList = document.getElementById('todoList');

    // Fetch all todos on page load
    fetchTodos();

    // Add todo event listener
    addTodoBtn.addEventListener('click', addTodo);
    todoInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') addTodo();
    });

    async function fetchTodos() {
        try {
            const response = await fetch('http://localhost:3000/api/todos');
            const todos = await response.json();
            renderTodos(todos);
        } catch (error) {
            console.error('Error fetching todos:', error);
        }
    }

    async function addTodo() {
        const text = todoInput.value.trim();
        if (!text) return;

        try {
            const response = await fetch('http://localhost:3000/api/todos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ text }),
            });

            const todo = await response.json();
            renderTodo(todo);
            todoInput.value = '';
        } catch (error) {
            console.error('Error adding todo:', error);
        }
    }

    async function toggleTodo(id) {
        try {
            const response = await fetch(`http://localhost:3000/api/todos/${id}`, {
                method: 'PUT',
            });
            const updatedTodo = await response.json();
            const todoElement = document.querySelector(`[data-id="${id}"]`);
            todoElement.classList.toggle('completed');
        } catch (error) {
            console.error('Error toggling todo:', error);
        }
    }

    async function deleteTodo(id) {
        try {
            const todoElement = document.querySelector(`[data-id="${id}"]`);
            todoElement.classList.add('removing');
            
            await new Promise(resolve => setTimeout(resolve, 300)); // Wait for animation
            
            await fetch(`http://localhost:3000/api/todos/${id}`, {
                method: 'DELETE',
            });
            
            todoElement.remove();
        } catch (error) {
            console.error('Error deleting todo:', error);
        }
    }

    function renderTodos(todos) {
        todoList.innerHTML = '';
        todos.forEach(todo => renderTodo(todo));
    }

    function renderTodo(todo) {
        const li = document.createElement('li');
        li.className = `todo-item ${todo.completed ? 'completed' : ''}`;
        li.dataset.id = todo.id;

        li.innerHTML = `
            <span>${todo.text}</span>
            <div class="actions">
                <button onclick="toggleTodo(${todo.id})">${todo.completed ? 'Undo' : 'Complete'}</button>
                <button class="delete" onclick="deleteTodo(${todo.id})">Delete</button>
            </div>
        `;

        todoList.appendChild(li);
    }

    // Make functions available globally for onclick handlers
    window.toggleTodo = toggleTodo;
    window.deleteTodo = deleteTodo;
}); 