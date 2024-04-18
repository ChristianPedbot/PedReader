import React from 'react';
import './book.css'; 
import AuthorName from './AutName';

function Book({ book }) {
  if (!book) {
    return null;
  }

  const { title,description, rating } = book; 

  return (
    <div className="book-container">
      <img className='imgBook' src={book.img} alt={title} />
      <div className="book-details">
        <h1>{title}</h1>
        <a className='author-name' href='/authors/add'><AuthorName authorId={book.author_id} /></a> 
        <p>{description}</p>
        <h2>{rating}</h2>
        <form className="btn-form" action=''> 
          <button className="btn btn-success">Alugar</button>
        </form>

        <div className="btn-adm">
          <form action="">
            <button id="edit" className="btn btn-light">edit</button>
          </form>
          <form action="">
            <button id="delete" className="btn btn-danger">Delete</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Book;
