import React from 'react';
import "./pagination.css";

function Pagination({ currentPage, totalPages, setCurrentPage }) {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(
      <li key={i} className={currentPage === i ? "active" : ""}>
        <a href="#" onClick={() => setCurrentPage(i)}>{i}</a>
      </li>
    );
  }

  return (
    <div className="container">
      <ul className="pagination">
        <li>
          <a href="#" onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>Prev</a>
        </li>
        {pageNumbers}
        <li>
          <a href="#" onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages}>Next</a>
        </li>
      </ul>
    </div>
  );
}

export default Pagination;
