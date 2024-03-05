import React from 'react';
import './MovieGrid.css';

function MovieGrid({ children }) {
  return (
    <div className="movie-grid">
        { children }
    </div>
  )
}

export default MovieGrid