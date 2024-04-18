import React from 'react';
import './editBook.css';


function EditBook() {
  return (
    <div class="container">
      <div className="row">
        <h1 className="text-title">Edit Book</h1>
        <div className="col-md-6">
          <form action="/campgrounds/:id?_method=PUT" method="POST" noValidate className="validated-form">
            <div className="mb-3">
              <label className="form-label" htmlFor="title">Title</label>
              <input className="form-control" type="text" placeholder='Title...' id="title" name="book[title]" value="" required />
              <div className="valid-feedback">
                Looks good
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="description">Description</label>
              <textarea className="form-control" placeholder='book description...' type="text" id="description-book" name="book[description]" required></textarea>
              <div className="valid-feedback">
                Looks good
              </div>
            </div>
            <div className='mb-3'>
                <label className='form-label' for="availability">Availability:</label>
                <select className='form-control' id="availability" name="availability">
                <option value="1">available</option>
                <option value="0">unavailable</option>
                </select>
            </div>
            <div className='mb-3'>
                <label className='form-label' for="genres">Genre:</label>
                <select className='form-control' id="genres" name="genres">
                <option value="0">Fiction</option>
                <option value="1">Romance</option>
                <option value="2">Horror</option>
                <option value="3">Mystery</option>
                <option value="4">Thriller</option>
                <option value="5">Adventure</option>
                <option value="6">Drama</option>
                <option value="7">Comedy</option>
                <option value="8">Poetry</option>
                <option value="9">Didactics</option>
                <option value="10">Fantasy</option>
                <option value="11">Kids</option>
                </select>
            </div>
            <div className='mb-3'>
                <label className='form-label' for="name-author">Author:</label>
                <select className='form-control' id="name-author" name="name-author">
                <option value="0">Fiction</option>
                <option value="1">Romance</option>
                <option value="2">Horror</option>
                <option value="3">Mystery</option>
                <option value="4">Thriller</option>
                <option value="5">Adventure</option>
                <option value="6">Drama</option>
                <option value="7">Comedy</option>
                <option value="8">Poetry</option>
                <option value="9">Didactics</option>
                <option value="10">Fantasy</option>
                <option value="11">Kids</option>
                </select>
            </div>
            <div className='mb-3'>
                <label id='author-go' className='form-label' >Didn't find your author?<a href='#' ><b> Add it here</b></a></label>
            </div>
            <a className="btn btn-outline-primary" id="btn-back" href="/books/:id">Back to Book</a>
            <button type="submit" id='btn-update' className="btn btn-success">Update Book</button>
          </form>
        </div>
        
        <div class="col-md-6">
        <label class="form-label" for="title">Change main image</label>
        <div class="mb-3">
            <form action="/campgrounds/<%= campground.id %>/add" method="POST" enctype="multipart/form-data">
              <input class="form-control" type="file" name="image" multiple/>
              <button type="submit" class="btn btn-primary mt-3" id="btn-update-book-img" >Upload Image</button>
            </form>
            <img className='imgBook-edit' src="https://a-static.mlcdn.com.br/1500x1500/livro-harry-potter-e-a-pedra-filosofal/magazineluiza/223260000/5e0050418707cbd107d78d3af402b1c0.jpg" alt="" />    
        </div>        
    </div>
      </div>
    </div>
  );
}

export default EditBook;
