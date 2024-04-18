
import './addAuthor.css';


function AddAuthor() {
  return (
<div class="row text-white">
    <h1 class="text-center text-white mt-3">New Author</h1>
    <div class="col-6 offset-3">
        <form action="/campgrounds" method="POST" novalidate class="validated-form" enctype="multipart/form-data">
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
                <label className='label-control'>Add image:</label>
            <div className="container-img-author">
                <form action="/campgrounds/<%= campground.id %>/add" method="POST" enctype="multipart/form-data">
                <input class="form-control mb-3" type="file" name="image" multiple/>
                <button type="submit" id="btn-upload" class="btn btn-success mt-3"  >Upload Image</button>
                </form>    
            </div>   

        </form>
    </div>
</div>
  );
}

export default AddAuthor;
