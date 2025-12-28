# Todo List App with User Feedback

A simple, elegant todo list application with an integrated user feedback feature.

## Features

### Todo List
- ✅ Add new tasks
- ✅ Mark tasks as complete
- ✅ Delete tasks
- ✅ Persistent storage using localStorage

### User Feedback
- 💬 Submit feedback about the app
- ⭐ Rate your experience (1-5 stars)
- 📊 View recent feedback submissions
- 💾 Feedback stored locally (last 10 submissions)

## Usage

Simply open `index.html` in your web browser to start using the application.

### Adding Todos
1. Type your task in the input field
2. Click "Add" or press Enter
3. Check the checkbox to mark as complete
4. Click "Delete" to remove a task

### Submitting Feedback
1. Write your feedback in the text area
2. Select a star rating (1-5 stars)
3. Click "Submit Feedback"
4. View your submission in the "Recent Feedback" section

## Technical Details

- Pure vanilla JavaScript (no frameworks)
- CSS3 for modern styling with gradient backgrounds
- LocalStorage for data persistence
- XSS protection through HTML escaping
- Responsive design

## Files

- `index.html` - Main HTML structure
- `style.css` - Styling and layout
- `app.js` - JavaScript functionality for todos and feedback

## Security

The application implements XSS protection by escaping all user input before rendering to prevent script injection attacks.
