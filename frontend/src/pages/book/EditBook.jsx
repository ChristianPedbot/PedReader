import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './editBook.css';
import AuthorName from './AutName';

function EditBook({ book }) {

  if (!book) {
    return (
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    );
  }

  const { title, description, availability, genre, author_id, img } = book;


  const [authors, setAuthors] = useState([]);

  useEffect(() => {

    const fetchAuthors = async () => {
      try {
        const response = await axios.get('http://localhost:3000/authors');
        setAuthors(response.data);
      } catch (error) {
        console.error('Erro ao buscar autores:', error);
      }
    };

    fetchAuthors();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <h1 className="text-title">Edit Book</h1>
        <div className="col-md-6">
        <form action={`http://localhost:3000/books/${book.id}/edit?_method=PUT`} method="POST" noValidate className="validated-form" encType='multipart/form-data'>
            <div className="mb-3">
              <label className="form-label" htmlFor="title">Title</label>
              <input className="form-control" type="text" placeholder='Title...' id="title" name="title" defaultValue={title} required />
              <div className="valid-feedback">
                Looks good
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="description">Description</label>
              <textarea className="form-control" placeholder='book description...' type="text" id="description-book" name="description" defaultValue={description} required></textarea>
              <div className="valid-feedback">
                Looks good
              </div>
            </div>
            <div className='mb-3'>
              <label className='form-label' htmlFor="availability">Availability:</label>
              <select className='form-control' id="availability" name="availability" defaultValue={availability}>
                <option value="1">available</option>
                <option value="0">unavailable</option>
              </select>
            </div>
            <div className='mb-3'>
              <label className='form-label' htmlFor="genres">Genre:</label>
              <select className='form-control' id="genres" name="categorie_id" defaultValue={genre}>
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
            <div className='mb-3'>
              <label className='form-label' htmlFor="name-author">Author:</label>
              <select className='form-control' id="name-author" name="author_id" defaultValue={author_id}>
                {authors.map(author => (
                  <option key={author.id} value={author.id}>{author.name}</option>
                ))}
              </select>
            </div>
            <div className='mb-3'>
              <label id='author-go' className='form-label' >Didn't find your author?<a href='#' ><b> Add it here</b></a></label>
            </div>
            <a className="btn btn-outline-primary" id="btn-back" href="/books/:id">Back to Book</a>
            <button type="submit" id='btn-update' className="btn btn-success">Update Book</button>
          </form>
        </div>

        <div className="col-md-6">
          <label className="form-label" htmlFor="title">Change main image</label>
          <div className="mb-3">
            <input className="form-control" type="file" name="img" multiple/>
            <img className='imgBook-edit mb-3' src={img} alt="" name="img" />
            <form action="">
              <button id='delete-book' className='btn btn-danger'>Delete Book</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditBook;
