const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Books = require('./BooksSchema');
require('./MongoDBConnect'); // Ensure MongoDB connection is established

const app = express();
const PORT = 5000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// Routes

// Get all books
app.get('/allbooks', async (req, res) => {
    try {
        const allBooks = await Books.find(); // Await the promise
        res.json(allBooks);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error retrieving books.');
    }
});

// Get a single book by ID
app.get('/getbook/:id', async (req, res) => {
    try {
        const book = await Books.findById(req.params.id); // Await the promise
        if (!book) {
            return res.status(404).send('Book not found.');
        }
        res.json(book);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error retrieving book.');
    }
});

// Add a new book
app.post('/addbooks', async (req, res) => {
    try {
        const newBook = new Books(req.body);
        await newBook.save(); // Await the save operation
        res.status(200).json({ message: 'Book added successfully' });
    } catch (err) {
        console.error(err);
        res.status(400).send('Error adding book.');
    }
});

// Update a book by ID
app.post('/updatebook/:id', async (req, res) => {
    try {
      const id = req.params.id;
      const updatedBook = await Books.findByIdAndUpdate(id, req.body, { new: true });
      if (!updatedBook) {
        return res.status(404).send('Book not found.');
      }
      res.status(200).json({ message: 'Book updated successfully', book: updatedBook });
    } catch (err) {
      console.error(err);
      res.status(500).send('Error updating book.');
    }
  });
  

// Delete a book by ID
app.post('/deleteBook/:id', async (req, res) => {
    try {
      const id = req.params.id;
      const deletedBook = await Books.findByIdAndDelete(id);
      if (!deletedBook) {
        return res.status(404).send('Book not found.');
      }
      res.status(200).send('Book deleted successfully.');
    } catch (err) {
      console.error(err);
      res.status(500).send('Error deleting book.');
    }
  });
  

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
