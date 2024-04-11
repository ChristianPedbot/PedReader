const connection = require('../utils/db');

module.exports.viewBook = (req, res) => {
    const livroId = req.params.id;
    res.send(`Detalhes do livro com o ID ${livroId}`);
}

module.exports.editBook = (req, res) => {
    const livroId = req.params.id;
    res.send(`Atualizar detalhes do livro com o ID ${livroId}`);
}

module.exports.deleteBook = (req, res) => {
    const livroId = req.params.id;
    res.send(`Excluir o livro com o ID ${livroId}`);
}

module.exports.books = (req, res) => {
    res.send('Listar todos os livros');
}

const multer = require('multer');
const { storage } = require('../cloudinary');
const upload = multer({ storage });

module.exports.addBook = (req, res) => {
    upload.single('img')(req, res, (err) => {
        if (err) {
            console.error('Erro ao fazer upload da imagem:', err);
            return res.status(500).send('Erro ao fazer upload da imagem');
        }
        
        const { title, description, availability, date, categorie_id, author_id } = req.body;

        const img = req.file.path;

        connection.query(
            'INSERT INTO books (title, description, availability, date, categorie_id, author_id, img) VALUES (?, ?, ?, ?, ?, ?, ?)',
            [title, description, availability, date, categorie_id, author_id, img],
            (error, booksResults) => {
                if (error) {
                    console.error('Erro ao inserir o livro no banco de dados:', error);
                    return res.status(500).send('Erro ao criar o livro');
                }

                return res.send('Livro adicionado com sucesso');
            }
        );
    });
};