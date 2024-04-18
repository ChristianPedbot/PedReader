import React from 'react';
import './addBook.css';

function AddBook({ authors }) {
  return (
    <div className="row text-white">
      <h1 className="text-center text-white mt-5">New Book</h1>
      <div className="col-6 offset-3">
        <form action="http://localhost:3000/books/add" method="POST" noValidate className="validated-form" encType="multipart/form-data">
          <div className="mb-3">
            <label className="form-label text-white" htmlFor="title">Title</label>
            <input className="form-control" type="text" id="title" name="title" required />
            <div className="valid-feedback">
              Looks good
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="description">Description</label>
            <textarea className="form-control" placeholder="book description..." type="text" id="description-book" name="description" required></textarea>
            <div className="valid-feedback">
              Looks good
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="availability">Availability:</label>
            <select className="form-control" id="availability" name="availability">
              <option value="1">available</option>
              <option value="0">unavailable</option>
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="date">Data:</label>
            <input className="form-control" type="date" id="date" name="date" required />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="genres">Genre:</label>
            <select className="form-control" id="genres" name="categorie_id">
              <option value="14">Fiction</option>
              <option value="15">Romance</option>
              <option value="16">Horror</option>
              <option value="17">Mystery</option>
              <option value="18">Thriller</option>
              <option value="19">Adventure</option>
              <option value="20">Drama</option>
              <option value="21">Comedy</option>
              <option value="22">Poetry</option>
              <option value="23">Didactics</option>
              <option value="24">Fantasy</option>
              <option value="25">Kids</option>
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="name-author">Author:</label>
            <select className="form-control" id="name-author" name="author_id">
              {authors.map(author => (
                <option key={author.id} value={author.id}>{author.name}</option>
              ))}
            </select>
            <label id='author-go' className='form-label' >Didn't find your author?<a href='author/add' ><b> Add it here</b></a></label>
          </div>
          <div className="container-img mb-3">
            <input className="form-control" type="file" name="img" multiple />
          </div>
          <button type="submit" className="btn btn-success">Add Book</button>
        </form>
      </div>
    </div>
  );
}

export default AddBook;
