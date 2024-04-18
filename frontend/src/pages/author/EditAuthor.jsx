import React from 'react';
import './editAuthor.css';


function EditAuthor() {
  return (
    <div class="container">
      <div className="row">
        <h1 className="text-title">Edit Author</h1>
        <div className="col-md-6">
          <form action="/campgrounds/:id?_method=PUT" method="POST" noValidate className="validated-form">
            <div className="mb-3">
              <label className="form-label" htmlFor="name">Name</label>
              <input className="form-control" type="text" id="name" name="author[name]" value="" required />
              <div className="valid-feedback">
                Looks good
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="biography">Biography</label>
              <textarea className="form-control" type="text" id="biography" name="author[biography]" required></textarea>
              <div className="valid-feedback">
                Looks good
              </div>
            </div>
            <button type="submit" className="btn btn-success">Update Author</button>
            <a className="btn btn-outline-primary" id="btn-back" href="">Back to Author</a>
          </form>
        </div>
        
        <div class="col-md-6">
        <label class="form-label" for="title">Change main image</label>
        <div class="mb-3">
            <form action="/campgrounds/<%= campground.id %>/add" method="POST" enctype="multipart/form-data">
              <input class="form-control" type="file" name="image" multiple/>
              <button type="submit" class="btn btn-primary mt-3">Upload Images</button>
            </form>
            <img className='imgAuthor-edit' src="https://images.impresa.pt/expresso/2022-08-31-j-k-rowling.jpg-41f760de" alt="" />    
        </div>        
    </div>
      </div>
    </div>
  );
}

export default EditAuthor;
