import React from 'react';
import './book.css'; 
import AuthorName from './AutName';
import { Link } from 'react-router-dom'; 

function Book({ book }) {
  if (!book) {
    return null;
  }

  const { id, title, description, rating, author_id } = book; 

  return (
    <div className="book-container">
      <img className='imgBook' src={book.img} alt={title} />
      <div className="book-details">
        <h1>{title}</h1>
        <Link className='author-name' to={`/authors/${author_id}`} reloadDocument><AuthorName authorId={author_id} /></Link> 
        <p>{description}</p>
        <h2>{rating}</h2>
        <form className="btn-form" action=''> 
          <button className="btn btn-success">Alugar</button>
        </form>

        <div className="btn-adm">
          <form action="">
            <Link  to={`/books/${id}/edit`}><button id="edit" className="btn btn-light" reloadDocument>edit</button></Link>
          </form>
          <form action={`http://localhost:3000/books/delete/${id}?_method=DELETE`} method="POST">
            <button id="delete" className="btn btn-danger">Delete</button>
          </form>

        </div>
      </div>
    </div>
  );
}

export default Book;
