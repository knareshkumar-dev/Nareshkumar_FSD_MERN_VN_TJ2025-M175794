const Book = require('../models/bookModel');

// Create a new book
exports.createBook = async (req, res) => {
  try {
    const { title, author, publishedYear, genre } = req.body;

    // Validate required fields
    if (!title || !author || !publishedYear || !genre) {
      return res.status(400).json({
        success: false,
        message: 'All fields (title, author, publishedYear, genre) are required'
      });
    }

    const book = new Book({
      title,
      author,
      publishedYear,
      genre
    });

    await book.save();

    res.status(201).json({
      success: true,
      message: 'Book created successfully',
      data: book
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error creating book',
      error: error.message
    });
  }
};

// Get all books
exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();

    res.status(200).json({
      success: true,
      data: books
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching books',
      error: error.message
    });
  }
};

// Get a book by ID
exports.getBookById = async (req, res) => {
  try {
    const { id } = req.params;

    const book = await Book.findById(id);

    if (!book) {
      return res.status(404).json({
        success: false,
        message: 'Book not found'
      });
    }

    res.status(200).json({
      success: true,
      data: book
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching book',
      error: error.message
    });
  }
};

// Update a book by ID
exports.updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author, publishedYear, genre } = req.body;

    // Check if book exists
    const book = await Book.findById(id);
    if (!book) {
      return res.status(404).json({
        success: false,
        message: 'Book not found'
      });
    }

    // Update fields if provided
    if (title) book.title = title;
    if (author) book.author = author;
    if (publishedYear) book.publishedYear = publishedYear;
    if (genre) book.genre = genre;

    await book.save();

    res.status(200).json({
      success: true,
      message: 'Book updated successfully',
      data: book
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error updating book',
      error: error.message
    });
  }
};

// Delete a book by ID
exports.deleteBook = async (req, res) => {
  try {
    const { id } = req.params;

    const book = await Book.findByIdAndDelete(id);

    if (!book) {
      return res.status(404).json({
        success: false,
        message: 'Book not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Book deleted successfully',
      data: book
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error deleting book',
      error: error.message
    });
  }
};

// Get books by genre with sorting
exports.getBooksByGenre = async (req, res) => {
  try {
    const { genre } = req.query;

    if (!genre) {
      return res.status(400).json({
        success: false,
        message: 'Genre query parameter is required'
      });
    }

    const books = await Book.find({ genre: { $regex: genre, $options: 'i' } }).sort({ publishedYear: 1 });

    res.status(200).json({
      success: true,
      data: books
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching books by genre',
      error: error.message
    });
  }
};
