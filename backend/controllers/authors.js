const connection = require('../utils/db');

module.exports.editAuthors = (req, res) => {
    const authorId = req.params.id;
    const { name, img, biography } = req.body;

    connection.query(
        'UPDATE authors SET name = ?, img = ?, biography = ? WHERE id = ?',
        [name, img, biography, authorId],
        (error) => {
            if (error) {
                console.error('Erro ao editar o autor:', error);
                return res.status(500).json({ error: 'Erro ao editar o autor' });
            }
            
            return res.send('Autor editado com sucesso');
        }
    );
}

module.exports.deleteAuthors = (req, res) => {
    const authorId = req.params.id;

    connection.query(
        'DELETE FROM authors WHERE id = ?',
        [authorId],
        (error) => {
            if (error) {
                console.error('Erro ao excluir o autor:', error);
                return res.status(500).json({ error: 'Erro ao excluir o autor' });
            }
            
            return res.send(`Autor com o ID ${authorId} excluído com sucesso`);
        }
    );
}

module.exports.getAuthors = (req, res) => {
    connection.query('SELECT * FROM authors', (error, results) => {
        if (error) {
            console.error('Erro ao listar os autores:', error);
            return res.status(500).json({ error: 'Erro ao listar os autores' });
        }
        res.json(results);
    });
}

exports.getAuthorById = (req, res) => {
    const authorId = req.params.id;
    
    connection.query(
        'SELECT * FROM authors WHERE id = ?',
        [authorId],
        (error, results) => {
            if (error) {
                console.error('Erro ao buscar o autor:', error);
                return res.status(500).json({ error: 'Erro ao buscar o autor' });
            }
            
            if (results.length === 0) {
                return res.status(404).json({ error: 'Autor não encontrado' });
            }

            const author = results[0];
            return res.json(author);
        }
    );
};

const multer = require('multer');
const { storage } = require('../cloudinary');
const upload = multer({ storage });

module.exports.addAuthors = (req, res) => {
    upload.single('img')(req, res, (err) => {
        if (err) {
            console.error('Erro ao fazer upload da imagem:', err);
            return res.status(500).json({ error: 'Erro ao fazer upload da imagem' });
        }
        
        const { name, biography } = req.body;
        const img = req.file ? req.file.path : null;

        if (!img) {
            console.error('Nenhuma imagem foi enviada');
            return res.status(400).json({ error: 'Nenhuma imagem foi enviada' });
        }

        connection.query(
            'INSERT INTO authors (name, img, biography) VALUES (?, ?, ?)',
            [name, img, biography],
            (error) => {
                if (error) {
                    console.error('Erro ao inserir o autor no banco de dados:', error);
                    return res.status(500).json({ error: 'Erro ao inserir o autor no banco de dados' });
                }

                return res.send('Autor adicionado com sucesso');
            }
        );
    });
};
