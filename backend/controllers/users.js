const connection = require('../utils/db');

module.exports.editUsers = (req, res) => {
    const userId = req.params.id;
    const { name, email, password, telephone, address, city, state, img } = req.body;

    connection.query(
        'UPDATE users SET name = ?, email = ? password = ?, telephone = ?, address = ?, city = ?, state = ?, img = ? WHERE id = ?',
        [name, email, password, telephone, address, city, state, img, userId],
        (error) => {
            if (error) {
                console.error('Erro ao editar o user:', error);
            }
            
            return res.send('user editado com sucesso');
        }
    );
}

module.exports.deleteUsers = (req, res) => {
    const userId = req.params.id;

    connection.query(
        'DELETE FROM users WHERE id = ?',
        [userId],
        (error) => {
            if (error) {
                console.error('Erro ao excluir o user:', error);
            }
            
            return res.send(`user com o ID ${userId} excluído com sucesso`);
        }
    );
}

module.exports.users = (req, res) => {
    connection.query('SELECT * FROM users', (error, results) => {
        if (error) {
            console.error('Erro ao listar os users:', error);
        }
        console.log(results);
        res.json(results);
    });
}

const multer = require('multer');
const { storage } = require('../cloudinary');
const upload = multer({ storage });

module.exports.addUsers = (req, res) => {
    upload.single('img')(req, res, (err) => {
        if (err) {
            console.error('Erro ao fazer upload da imagem:', err);
        }
        
        const { name, email, password, telephone, address, city, state } = req.body;

        if (!req.file || !req.file.path) {
            console.error('Nenhuma imagem foi enviada');
        }
        
        const img = req.file.path;

        connection.query(
            'INSERT INTO users (name, email, password, telephone, address, city, state, img) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
            [name, email, password, telephone, address, city, state, img],
            (error) => {
                if (error) {
                    console.error('Erro ao inserir o user no banco de dados:', error);
                }

                return res.send('user adicionado com sucesso');
            }
        );
    });
};
