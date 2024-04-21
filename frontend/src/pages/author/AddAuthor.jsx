
import './addAuthor.css';


function AddAuthor() {
  return (
<div class="row text-white">
    <h1 class="text-center text-white mt-3">New Author</h1>
    <div class="col-6 offset-3">
        <form action="http://localhost:3000/authors/add" method="POST" novalidate class="validated-form" enctype="multipart/form-data">
        <div className="mb-3">
              <label className="form-label" htmlFor="name">Name</label>
              <input className="form-control" type="text" id="name" name="name" required />
              <div className="valid-feedback">
                Looks good
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="biography">Biography</label>
              <textarea className="form-control" type="text" id="biography" name="biography" required></textarea>
              <div className="valid-feedback">
                Looks good
              </div>
            </div>
                <label className='label-control'>Add image:</label>
            <div className="container-img-author">
                <input class="form-control mb-3" type="file" name="img" multiple/>  
            </div>   
          <button className='btn btn-success'>Add Author</button>
        </form>
    </div>
</div>
  );
}

export default AddAuthor;
