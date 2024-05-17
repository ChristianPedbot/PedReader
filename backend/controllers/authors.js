const connection = require('../utils/db');
const multer = require('multer');
const { storage } = require('../cloudinary');
const upload = multer({ storage });

module.exports.editAuthors = (req, res) => {
    const authorId = req.params.id;

    upload.single('img')(req, res, (err) => {
        if (err) {
            console.error('Error uploading image:', err);
            return res.status(500).json({ error: 'Error uploading image' });
        }

        const { name, biography } = req.body;
        let img = null;

        if (req.file && req.file.path) {
            img = req.file.path;
        }

        connection.query(
            'UPDATE authors SET name = ?, biography = ?, img = ? WHERE id = ?',
            [name, biography, img, authorId],
            (error, results) => {
                if (error) {
                    console.error('Error editing author:', error);
                    return res.status(500).json({ error: 'Error editing author' });
                }

                if (results.affectedRows === 0) {
                    return res.status(404).json({ error: 'Author not found' });
                }
                return res.status(200).json({ message: 'Author edited successfully' });
            }
        );
    });
};

module.exports.deleteAuthors = (req, res) => {
    const authorId = req.params.id;

    connection.query(
        'DELETE FROM authors WHERE id = ?',
        [authorId],
        (error) => {
            if (error) {
                console.error('Error deleting author:', error);
                return res.status(500).json({ error: 'Error deleting author' });
            }

            return res.send(`Author with ID ${authorId} successfully deleted`);
        }
    );
}

module.exports.getAuthors = (req, res) => {
    connection.query('SELECT * FROM authors', (error, results) => {
        if (error) {
            console.error('Error listing authors:', error);
            return res.status(500).json({ error: 'Error listing authors' });
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
                console.error('Error when searching for the author:', error);
                return res.status(500).json({ error: 'Error when searching for the author' });
            }

            if (results.length === 0) {
                return res.status(404).json({ error: 'Author not found' });
            }

            const author = results[0];
            return res.json(author);
        }
    );
};


module.exports.addAuthors = (req, res) => {
    upload.single('img')(req, res, (err) => {
        if (err) {
            console.error('Error uploading image:', err);
            return res.status(500).json({ error: 'Error uploading image' });
        }

        const { name, biography } = req.body;
        const img = req.file ? req.file.path : null;

        if (!img) {
            console.error('No images were sent');
            return res.status(400).json({ error: 'No images were sent' });
        }

        connection.query(
            'INSERT INTO authors (name, img, biography) VALUES (?, ?, ?)',
            [name, img, biography],
            (error) => {
                if (error) {
                    console.error('Error inserting author into database:', error);
                    return res.status(500).json({ error: 'Error inserting author into database' });
                }

                return res.send('Author added successfully');
            }
        );
    });
};
