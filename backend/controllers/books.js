const connection = require('../utils/db');
const multer = require('multer');
const { storage } = require('../cloudinary');
const upload = multer({ storage });

module.exports.editBook = (req, res) => {
    const livroId = req.params.id;

    upload.single('img')(req, res, (err) => {
        if (err) {
            console.error('Error uploading image:', err);
            return res.status(500).json({ error: 'Error uploading image' });
        }

        const { title, description, availability, categorie_id, author_id } = req.body;

        let img = null;
        if (req.file && req.file.path) {
            img = req.file.path;
        } else {
            img = req.body.img;
        }

        connection.query(
            'UPDATE books SET title = ?, description = ?, availability = ?,  categorie_id = ?, author_id = ?, img = ? WHERE id = ?',
            [title, description, availability, categorie_id, author_id, img, livroId],
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
};

module.exports.deleteBook = (req, res) => {
    const livroId = req.params.id;

    connection.query(
        'DELETE FROM books WHERE id = ?',
        [livroId],
        (error) => {
            if (error) {
                console.error('Error deleting book:', error);
            }

            return res.send(`Book with ID ${bookId} successfully deleted`);
        }
    );
}

module.exports.books = (req, res) => {
    const page = req.query.page ? parseInt(req.query.page) : 1;
    const resultsPerPage = 20;
    const offset = (page - 1) * resultsPerPage;

    connection.query('SELECT * FROM books LIMIT ?, ?', [offset, resultsPerPage], (error, results) => {
        if (error) {
            console.error('Error listing books:', error);
            return res.status(500).json({ error: 'Error listing books' });
        }
        res.json(results);
    });
};

module.exports.getBookById = (req, res) => {
    const livroId = req.params.id;

    connection.query(
        'SELECT * FROM books WHERE id = ?',
        [livroId],
        (error, results) => {
            if (error) {
                console.error('Error when searching for the book:', error);
                return res.status(500).json({ error: 'Error when searching for the book' });
            }

            if (results.length === 0) {
                return res.status(404).json({ error: 'Book not found' });
            }

            return res.json(results[0]);
        }
    );
};

module.exports.getBookByCategorie = (req, res) => {
    const CategorieId = req.params.id;

    connection.query(
        'SELECT * FROM books WHERE categorie_id = ?',
        [CategorieId],
        (error, results) => {
            if (error) {
                console.error('Error when searching for books:', error);
                return res.status(500).json({ error: 'Error when searching for books' });
            }

            if (results.length === 0) {
                return res.status(404).json({ error: 'No books found' });
            }

            return res.json(results);
        }
    );
};

module.exports.getCategories = (req, res) => {

    connection.query(
        'SELECT * FROM categories',
        (error, results) => {
            if (error) {
                console.error('Error when searching for books:', error);
                return res.status(500).json({ error: 'Error when searching for books' });
            }

            if (results.length === 0) {
                return res.status(404).json({ error: 'No books found' });
            }

            return res.json(results);
        }
    );
};

module.exports.addBook = (req, res) => {
    upload.single('img')(req, res, (err) => {
        if (err) {
            console.error('Error uploading image:', err);
            return res.status(500).json({ error: 'Error uploading image' });
        }

        const { title, description, availability, date, categorie_id, author_id } = req.body;

        if (!req.file || !req.file.path) {
            console.error('No images were sent');
            return res.status(400).json({ error: 'No images were sent' });
        }

        const img = req.file.path;

        connection.query(
            'INSERT INTO books (title, description, availability, date, categorie_id, author_id, img) VALUES (?, ?, ?, ?, ?, ?, ?)',
            [title, description, availability, date, categorie_id, author_id, img],
            (error, results) => {
                if (error) {
                    console.error('Error inserting book into database:', error);
                    return res.status(500).json({ error: 'Error inserting book into database' });
                }

                console.log('Book added successfully');
                return res.status(200).json({ message: 'Book added successfully' });
            }
        );
    });
};

module.exports.addComments = (req, res) => {
    const { livroId, userId, comment } = req.body;

    connection.query(
        'INSERT INTO comments (comment, book_id, user_id) VALUES (?, ?, ?)',
        [comment, livroId, userId],
        (error, results) => {
            if (error) {
                console.error('Error inserting comment:', error);
                return res.status(500).json({ error: 'Error inserting comment. Please try again.' });
            }

            console.log('Comment inserted successfully');
            return res.status(200).json({ success: true });
        }
    );
}

module.exports.getCommentsById = (req, res) => {
    const livroId = req.params.id;

    connection.query(
        'SELECT c.*, u.name AS user_name FROM comments c JOIN users u ON c.user_id = u.id WHERE c.book_id = ?',
        [livroId],
        (error, results) => {
            if (error) {
                console.error('Error when searching for comments:', error);
                return res.status(500).json({ error: 'Error when searching for comments' });
            }

            if (results.length === 0) {
                return res.status(404).json({ error: 'No comments found' });
            }

            return res.json(results);
        }
    );
};

module.exports.deleteComment = (req, res) => {
    const CommentId = req.params.id;

    connection.query(
        'DELETE FROM comments WHERE id = ?',
        [CommentId],
        (error) => {
            if (error) {
                console.error('Error when deleting Comment:', error);
            }

            return res.send(`Comment with ID ${CommentId} successfully deleted`);
        }
    );
}