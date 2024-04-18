import React from 'react';
import "./search.css";

function Search() {
  return (

    <div class="input-group mb-3">
    <input type="text" class="form-control" placeholder="Search book..." aria-label="Recipient's username" aria-describedby="button-addon2"/>
    <button class="btn btn-outline-primary" type="button" id="button-addon2">Search</button>
    </div>

  );
}

export default Search;
