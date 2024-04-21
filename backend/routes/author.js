const express = require('express');
const router = express.Router();
const authorController = require('../controllers/authors');
const methodOverride = require('method-override');
router.use(methodOverride('_method'));




router.put('/authors/edit/:id', authorController.editAuthors);

router.delete('/authors/delete/:id', authorController.deleteAuthors);

router.get('/authors', authorController.getAuthors);

router.get('/authors/:id', authorController.getAuthorById);

router.post('/authors/add', authorController.addAuthors);

module.exports = router;
