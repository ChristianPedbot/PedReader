import React from 'react';
import { Link } from 'react-router-dom'; 
import "./books.css";

export default function Books({ books }) {

  if (books.length === 0) {
    return <p>Nenhum livro disponível.</p>;
  }

  return (
    <div className="cards">
      {books.map(book => (
        <div className="card" key={book.id}>
          <Link to={`/books/${book.id}`} className="book-link" reloadDocument>
            <img src={book.img} alt={book.title} />
            <p className="card-desc">
              {book.title}<br />Rating: XXXXX <br /> {book.description}
            </p>
          </Link>
        </div>
      ))}
    </div>
  );
}
