const connection = require('../utils/db');

module.exports.editBook = (req, res) => {
    const livroId = req.params.id;
    const { title, description, availability, date, categorie_id, author_id } = req.body;

    connection.query(
        'UPDATE books SET title = ?, description = ?, availability = ?, date = ?, categorie_id = ?, author_id = ? WHERE id = ?',
        [title, description, availability, date, categorie_id, author_id, livroId],
        (error) => {
            if (error) {
                console.error('Erro ao editar o livro:', error);
            }
            
            return res.send('Livro editado com sucesso');
        }
    );
}

module.exports.deleteBook = (req, res) => {
    const livroId = req.params.id;

    connection.query(
        'DELETE FROM books WHERE id = ?',
        [livroId],
        (error) => {
            if (error) {
                console.error('Erro ao excluir o livro:', error);
            }
            
            return res.send(`Livro com o ID ${livroId} excluído com sucesso`);
        }
    );
}

module.exports.books = (req, res) => {
    connection.query('SELECT * FROM books', (error, results) => {
        if (error) {
            console.error('Erro ao listar os livros:', error);
        }
        res.json(results);
    });
}

module.exports.getBookById = (req, res) => {
    const livroId = req.params.id;

    connection.query(
        'SELECT * FROM books WHERE id = ?',
        [livroId],
        (error, results) => {
            if (error) {
                console.error('Erro ao buscar o livro:', error);
                return res.status(500).json({ error: 'Erro ao buscar o livro' });
            }

            if (results.length === 0) {
                return res.status(404).json({ error: 'Livro não encontrado' });
            }

            return res.json(results[0]);
        }
    );
};

const multer = require('multer');
const { storage } = require('../cloudinary');
const upload = multer({ storage });

module.exports.addBook = (req, res) => {
    upload.single('img')(req, res, (err) => {
        if (err) {
            console.error('Erro ao fazer upload da imagem:', err);
        }
        
        const { title, description, availability, date, categorie_id, author_id } = req.body;

        if (!req.file || !req.file.path) {
            console.error('Nenhuma imagem foi enviada');
        }
        
        const img = req.file.path;

        connection.query(
            'INSERT INTO books (title, description, availability, date, categorie_id, author_id, img) VALUES (?, ?, ?, ?, ?, ?, ?)',
            [title, description, availability, date, categorie_id, author_id, img],
            (error) => {
                if (error) {
                    console.error('Erro ao inserir o livro no banco de dados:', error);
                }

                return res.send('Livro adicionado com sucesso');
            }
        );
    });
};
