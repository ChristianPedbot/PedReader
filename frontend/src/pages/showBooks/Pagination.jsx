import React from 'react';
import "./pagination.css";

function Pagination() {
  return (

    <div class="container">
    <ul class="pagination">
    <li>
        <a href="#">Prev</a>
    </li>
    <li>
        <a href="#">1</a>
    </li>
    <li class="active">
        <a href="#">2</a>
    </li>
    <li>
        <a href="#">3</a>
    </li>
    <li>
        <a href="#">4</a>
    </li>
    <li>
        <a href="#">5</a>
    </li>
    <li>
        <a href="#">Next</a>
    </li>
    </ul>
    </div>

  );
}

export default Pagination;




