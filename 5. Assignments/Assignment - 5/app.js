const express = require('express');
const mongoose = require('mongoose');
const bookRoutes = require('./routes/bookRoutes');

const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Logging middleware
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
  next();
});

// MongoDB connection
const MONGODB_URI = 'mongodb://localhost:27017/book-management';

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log('MongoDB connected successfully');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  });

// Routes
app.use('/', bookRoutes);

// Default route
app.get('/', (req, res) => {
  res.json({
    message: 'Book Management API',
    endpoints: {
      'POST /books': 'Create a new book',
      'GET /books': 'Get all books',
      'GET /books/:id': 'Get a book by ID',
      'PUT /books/:id': 'Update a book by ID',
      'DELETE /books/:id': 'Delete a book by ID',
      'GET /books/filter/genre?genre=xyz': 'Get books by genre (sorted by publishedYear)'
    }
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  });
});

// Error handling middleware
app.use((error, req, res, next) => {
  console.error('Error:', error);
  res.status(500).json({
    success: false,
    message: 'Internal server error',
    error: error.message
  });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
