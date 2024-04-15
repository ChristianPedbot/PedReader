const express = require('express');
const router = express.Router();
const AuthorController = require('../controllers/authors');



router.put('/authors/edit/:id', authorsController.editAuthors);

router.delete('/authors/delete/:id', authorsController.deleteAuthors);

router.get('/authors', authorsController.authors);

router.post('/authors/add', authorsController.addAuthors);

module.exports = router;
