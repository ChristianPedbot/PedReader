const connection = require('../utils/db');

module.exports.editAuthors = (req, res) => {
    const authorId = req.params.id;
    const { name, img, biography } = req.body;

    connection.query(
        'UPDATE books SET name = ?, img = ?, biography = ? WHERE id = ?',
        [name, img, biography, authorId],
        (error) => {
            if (error) {
                console.error('Erro ao editar o author:', error);
            }
            
            return res.send('author editado com sucesso');
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
                console.error('Erro ao excluir o author:', error);
            }
            
            return res.send(`author com o ID ${authorId} excluído com sucesso`);
        }
    );
}

module.exports.authors = (req, res) => {
    connection.query('SELECT * FROM authors', (error, results) => {
        if (error) {
            console.error('Erro ao listar os autores:', error);
        }
        console.log(results);
        res.json(results);
    });
}

const multer = require('multer');
const { storage } = require('../cloudinary');
const upload = multer({ storage });

module.exports.addAuthors = (req, res) => {
    upload.single('img')(req, res, (err) => {
        if (err) {
            console.error('Erro ao fazer upload da imagem:', err);
        }
        
        const { name, biography } = req.body;

        if (!req.file || !req.file.path) {
            console.error('Nenhuma imagem foi enviada');
        }
        
        const img = req.file.path;

        connection.query(
            'INSERT INTO authors (name, img) VALUES (?, ?, ?)',
            [name, img, biography],
            (error) => {
                if (error) {
                    console.error('Erro ao inserir o autor no banco de dados:', error);
                }

                return res.send('autor adicionado com sucesso');
            }
        );
    });
};
