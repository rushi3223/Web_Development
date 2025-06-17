const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

// In-memory storage for todos
let todos = [];

// Routes
app.get('/api/todos', (req, res) => {
    console.log('GET /api/todos request received');
    res.json(todos);
});

app.post('/api/todos', (req, res) => {
    console.log('POST /api/todos request received');
    const todo = {
        id: Date.now(),
        text: req.body.text,
        completed: false
    };
    todos.push(todo);
    res.json(todo);
});

app.put('/api/todos/:id', (req, res) => {
    console.log('PUT /api/todos request received');
    const id = parseInt(req.params.id);
    const todo = todos.find(t => t.id === id);
    if (todo) {
        todo.completed = !todo.completed;
        res.json(todo);
    } else {
        res.status(404).json({ error: 'Todo not found' });
    }
});

app.delete('/api/todos/:id', (req, res) => {
    console.log('DELETE /api/todos request received');
    const id = parseInt(req.params.id);
    todos = todos.filter(t => t.id !== id);
    res.json({ message: 'Todo deleted' });
});

// Add a test route
app.get('/test', (req, res) => {
    console.log('Test route accessed');
    res.send('Server is working!');
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error('Error:', err);
    res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(port, '0.0.0.0', () => {
    console.log(`Server running at http://localhost:${port}`);
    console.log('Server is listening on all network interfaces');
}); 