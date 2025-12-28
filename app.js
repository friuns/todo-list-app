// Todo List functionality
let todos = JSON.parse(localStorage.getItem('todos')) || [];
let feedbacks = JSON.parse(localStorage.getItem('feedbacks')) || [];
let selectedRating = 0;

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    renderTodos();
    renderFeedbacks();
    initializeEventListeners();
});

function initializeEventListeners() {
    // Todo functionality
    document.getElementById('addBtn').addEventListener('click', addTodo);
    document.getElementById('todoInput').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') addTodo();
    });

    // Feedback functionality
    const stars = document.querySelectorAll('.star');
    stars.forEach(star => {
        star.addEventListener('click', () => {
            selectedRating = parseInt(star.dataset.rating);
            document.getElementById('rating').value = selectedRating;
            updateStars();
        });
    });

    document.getElementById('feedbackForm').addEventListener('submit', submitFeedback);
}

// Todo functions
function addTodo() {
    const input = document.getElementById('todoInput');
    const text = input.value.trim();
    
    if (text === '') return;
    
    const todo = {
        id: Date.now(),
        text: text,
        completed: false
    };
    
    todos.push(todo);
    saveTodos();
    renderTodos();
    input.value = '';
}

function toggleTodo(id) {
    todos = todos.map(todo => 
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    saveTodos();
    renderTodos();
}

function deleteTodo(id) {
    todos = todos.filter(todo => todo.id !== id);
    saveTodos();
    renderTodos();
}

function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

function renderTodos() {
    const todoList = document.getElementById('todoList');
    
    if (todos.length === 0) {
        todoList.innerHTML = '<div class="empty-state">No tasks yet. Add one above!</div>';
        return;
    }
    
    todoList.innerHTML = todos.map(todo => `
        <li class="todo-item ${todo.completed ? 'completed' : ''}">
            <input type="checkbox" ${todo.completed ? 'checked' : ''} 
                   onchange="toggleTodo(${todo.id})">
            <span>${escapeHtml(todo.text)}</span>
            <button class="delete-btn" onclick="deleteTodo(${todo.id})">Delete</button>
        </li>
    `).join('');
}

// Feedback functions
function updateStars() {
    const stars = document.querySelectorAll('.star');
    stars.forEach(star => {
        const rating = parseInt(star.dataset.rating);
        if (rating <= selectedRating) {
            star.classList.add('active');
        } else {
            star.classList.remove('active');
        }
    });
}

function submitFeedback(e) {
    e.preventDefault();
    
    const feedbackText = document.getElementById('feedbackText').value.trim();
    const rating = parseInt(document.getElementById('rating').value);
    const messageDiv = document.getElementById('feedbackMessage');
    
    // Validation
    if (feedbackText === '') {
        showMessage('Please enter your feedback.', 'error');
        return;
    }
    
    if (rating === 0) {
        showMessage('Please select a rating.', 'error');
        return;
    }
    
    // Create feedback object
    const feedback = {
        id: Date.now(),
        text: feedbackText,
        rating: rating,
        date: new Date().toISOString()
    };
    
    // Save feedback
    feedbacks.unshift(feedback); // Add to beginning of array
    if (feedbacks.length > 10) {
        feedbacks = feedbacks.slice(0, 10); // Keep only last 10 feedbacks
    }
    saveFeedbacks();
    
    // Reset form
    document.getElementById('feedbackForm').reset();
    selectedRating = 0;
    updateStars();
    
    // Show success message
    showMessage('Thank you for your feedback! 🎉', 'success');
    
    // Render feedbacks
    renderFeedbacks();
}

function saveFeedbacks() {
    localStorage.setItem('feedbacks', JSON.stringify(feedbacks));
}

function renderFeedbacks() {
    const feedbackList = document.getElementById('feedbackList');
    
    if (feedbacks.length === 0) {
        feedbackList.innerHTML = '<div class="empty-state">No feedback submitted yet.</div>';
        return;
    }
    
    feedbackList.innerHTML = feedbacks.map(feedback => `
        <div class="feedback-item">
            <div class="feedback-rating">${'⭐'.repeat(feedback.rating)}</div>
            <div class="feedback-text">${escapeHtml(feedback.text)}</div>
            <div class="feedback-date">${formatDate(feedback.date)}</div>
        </div>
    `).join('');
}

function showMessage(message, type) {
    const messageDiv = document.getElementById('feedbackMessage');
    messageDiv.textContent = message;
    messageDiv.className = `feedback-message ${type}`;
    
    setTimeout(() => {
        messageDiv.className = 'feedback-message';
    }, 5000);
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}
