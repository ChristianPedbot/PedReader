const connection = require('../utils/db');
const multer = require('multer');
const { storage } = require('../cloudinary');
const upload = multer({ storage });
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { secret } = require('../authentication/authConfig');
const { generateToken, verifyToken } = require('../authentication/aurthService');

module.exports.editUsers = (req, res) => {
    const userId = req.params.id;

    upload.single('img')(req, res, (err) => {
        if (err) {
            console.error('Error uploading image:', err);
            return res.status(500).json({ error: 'Error uploading image' });
        }

        const { name, email, telephone, address, city, state } = req.body;

        let img = null;
        if (req.file && req.file.path) {
            img = req.file.path;
        } else {
            img = req.body.img;
        }

        connection.query(
            'UPDATE users SET name = ?, email = ? , telephone = ?, address = ?, city = ?, state = ?, img = ? WHERE id = ?',
            [name, email, telephone, address, city, state, img, userId],
            (error, results) => {
                if (error) {
                    console.error('Error editing the book:', error);
                    return res.status(500).json({ error: 'Error editing the book' });
                }

                if (results.affectedRows === 0) {
                    return res.status(404).json({ error: 'Book not found' });
                }
                return res.status(200).json({ message: 'Book successfully edited' });
            }
        );
    });
}

module.exports.deleteUsers = (req, res) => {
    const userId = req.params.id;

    connection.query(
        'DELETE FROM users WHERE id = ?',
        [userId],
        (error) => {
            if (error) {
                console.error('Error deleting user:', error);
            }

            return res.send(`user with ID ${userId} successfully deleted`);
        }
    );
}

module.exports.users = (req, res) => {
    connection.query('SELECT * FROM users', (error, results) => {
        if (error) {
            console.error('Error listing users:', error);
        }
        console.log(results);
        res.json(results);
    });
}



module.exports.addUsers = (req, res) => {


    const { name, email, password } = req.body;


    bcrypt.hash(password, 10, (hashError, hashedPassword) => {
        if (hashError) {
            console.error('Error creating password hash:', hashError);
            return res.status(500).json({ error: 'Error creating password hash' });
        }

        connection.query(
            'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
            [name, email, hashedPassword],
            (insertError) => {
                if (insertError) {
                    console.error('Error inserting user into database:', insertError);
                    return res.status(500).json({ error: 'Error inserting user into database' });
                }

                return res.send('User added successfully');
            }
        );
    });
};



module.exports.loginUser = (req, res) => {
    const { email, password } = req.body;

    connection.query(
        'SELECT * FROM users WHERE email = ?',
        [email],
        (error, results) => {
            if (error) {
                console.error('Error when searching for user in the database:', error);
                return res.status(500).json({ error: 'Error when searching for user in the database' });
            }

            if (results.length === 0) {
                return res.status(404).json({ error: 'User not found' });
            }

            const user = results[0];

            bcrypt.compare(password, user.password, (compareError, isMatch) => {
                if (compareError) {
                    console.error('Error comparing passwords:', compareError);
                    return res.status(500).json({ error: 'Error comparing passwords' });
                }

                if (!isMatch) {
                    return res.status(401).json({ error: 'Invalid credentials' });
                }

                const token = generateToken(user.id);

                return res.status(200).json({ token });
            });
        }
    );
};

module.exports.getUsersById = (req, res) => {
    const userId = req.params.id;

    connection.query(
        'SELECT * FROM users WHERE id = ?',
        [userId],
        (error, results) => {
            if (error) {
                console.error('Erro ao buscar os users:', error);
                return res.status(500).json({ error: 'Error when searching for users' });
            }

            if (results.length === 0) {
                return res.status(404).json({ error: 'No users found' });
            }

            return res.json(results[0]);
        }
    );
};

module.exports.getBookByUserId = async (req, res) => {
    try {
        const userId = req.params.id;

        const query = `
            SELECT book_id FROM locations WHERE user_id = ?;
        `;

        connection.query(query, [userId], (error, results) => {
            if (error) {
                console.error('Error when searching for users books:', error);
                return res.status(500).json({ error: 'Error when searching for users books' });
            }

            const bookIds = results.map(result => result.book_id);

            return res.json({ bookIds });
        });
    } catch (error) {
        console.error('Error when searching for users books:', error);
        return res.status(500).json({ error: 'Error when searching for users books' });
    }
};
