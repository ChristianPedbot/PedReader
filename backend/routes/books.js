const express = require('express');
const router = express.Router();

router.get('/books/:id', (req, res) => {
  const livroId = req.params.id;
  res.send(`Detalhes do livro com o ID ${livroId}`);
});


router.put('/books/edit/:id', (req, res) => {
  const livroId = req.params.id;
  res.send(`Atualizar detalhes do livro com o ID ${livroId}`);
});


router.delete('/books/delete/:id', (req, res) => {
  const livroId = req.params.id;
  res.send(`Excluir o livro com o ID ${livroId}`);
});

router.get('/books', (req, res) => {
  res.send('Listar todos os livros');
});


router.post('/books/add', (req, res) => {
  res.send('Criar um novo livro');
});

module.exports = router;
