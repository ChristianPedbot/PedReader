const express = require('express');
const router = express.Router();
const bookController = require('../controllers/books');
const methodOverride = require('method-override');
const authMiddleware = require('../authentication/auth');
router.use(methodOverride('_method'));

router.put('/books/:id/edit', bookController.editBook);

router.delete('/books/delete/:id', bookController.deleteBook);

router.get('/books', bookController.books);

router.get('/book/:id', bookController.getBookById);

router.get('/book/categories', bookController.getCategories);

router.get('/book/categorie/:id', bookController.getBookByCategorie);

router.post('/books/add', bookController.addBook);

router.post('/book/addComments', bookController.addComments);

router.get('/book/comments/:id', bookController.getCommentsById);

router.delete('/book/comment/delete/:id', bookController.deleteComment);

module.exports = router;
