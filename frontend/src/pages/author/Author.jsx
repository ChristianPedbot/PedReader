import React from 'react';
import "./author.css";

function Author({ author }) {
  if (!author) {
    return <p>Carregando...</p>;
  }

  return (
    <div className="author-container">
      <img className='imgAuthor' src={author.img} alt={author.name} />
      <div className="author-details">
        <h1>{author.name}</h1>
        <h3>Author</h3>
        <p>{author.biography}</p>
        <form className="btn-form">
          <button className="btn btn-success">Alugar</button>
        </form>

        <div className="btn-adm">
          <form action="">
            <button id="edit-author" className="btn btn-light">edit</button>
          </form>
          <form action={`http://localhost:3000/authors/delete/${author.id}?_method=DELETE`} method="POST">
            <button id="delete-author" className="btn btn-danger">Delete</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Author;
