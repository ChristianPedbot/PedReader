const express = require('express');
const router = express.Router();
const bookController = require('../controllers/books');
const methodOverride = require('method-override');
router.use(methodOverride('_method'));


router.put('/books/:id/edit', bookController.editBook);

router.delete('/books/delete/:id', bookController.deleteBook);

router.get('/books', bookController.books);

router.get('/book/:id', bookController.getBookById);

router.post('/books/add', bookController.addBook);

module.exports = router;
