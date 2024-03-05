import React from 'react';

import './Pagination.css'
function Pagination({ pageNumber, totalPages, handlePageChange }) {

  // Calculate the page range to display dynamically
  const visiblePageCount = 4; // Number of page links to show at a time
  const startPage = Math.max(1, pageNumber - Math.floor(visiblePageCount / 2));
  const endPage = Math.min(totalPages, startPage + visiblePageCount - 1);

  // Dynamically build the page links
  const pageLinks = [];
  for (let i = startPage; i <= endPage; i++) {
    pageLinks.push(
        
      <li key={i} className={`page-item ${i === pageNumber ? "active" : ''}`}>
        <a className="page-link" href="#" onClick={() => handlePageChange(i)}>
          {i}
        </a>
      </li>
    );
  }

  return (
    <nav aria-label="Page navigation" className='pagination-container '>
      <ul className="pagination pagination-sm">
        <li className={pageNumber === 1 ? 'page-item disabled' : 'page-item'}>
          <a className="page-link" href="#" onClick={() => handlePageChange(pageNumber - 1)}>
            &laquo;
          </a>
        </li>
        {pageLinks}
        <li className={pageNumber === totalPages ? 'page-item disabled' : 'page-item'}>
          <a className="page-link" href="#" onClick={() => handlePageChange(pageNumber + 1)}>
          &raquo;
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
