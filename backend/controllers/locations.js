const connection = require('../utils/db');

const returnDate = new Date();
returnDate.setDate(returnDate.getDate() + 7);

module.exports.addLocation = (req, res) => {
  const livroId = req.body.livroId;
  const userId = req.body.userId;

  connection.query(
    'INSERT INTO locations (book_id, user_Id, location_date, return_date) VALUES (?, ?, CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, INTERVAL 7 DAY))',
    [livroId, userId],
    (error, results) => {
      if (error) {
        console.error("Rental was not possible:", error);
        connection.rollback(() => {
          res.status(500).json({ message: "Error when making the rental" });
        });
      } else {
        console.log("Successful rental");


        connection.query(
          'UPDATE books SET availability = 1 WHERE id = ?',
          [livroId],
          (updateError) => {
            if (updateError) {
              console.error('Error updating book status:', updateError);
              connection.rollback(() => {
                res.status(500).json({ message: "Error when making the rental" });
              });
            } else {
              console.log('Book status updated successfully');
              connection.commit((commitError) => {
                if (commitError) {
                  console.error('Error confirming transaction:', commitError);
                  connection.rollback(() => {
                    res.status(500).json({ message: "Error when making the rental" });
                  });
                } else {
                  console.log('Transaction confirmed');
                  res.status(200).json({ message: "Successful rental" });
                }
              });
            }
          }
        );
      }
    }
  );
}

module.exports.getReturnDate = (req, res) => {
  const livroId = req.params.id;

  connection.query(
    'SELECT return_date FROM locations WHERE book_id = ?',
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

