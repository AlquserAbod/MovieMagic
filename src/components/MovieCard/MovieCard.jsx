import FilterMoviePoster from '../404MoviePoster/404MoviePoster'
import MovieControls from '../MovieControls/MovieControls'
import './MovieCard.css'

import React from 'react'

function MovieCard({ movie, type}) {
  return (
    <div className="movie-card">
        <div className="overlay"></div>
        {movie.poster_path ? (
            <img src={`${process.env.REACT_APP_POSTER_API}/w500${movie.poster_path}`} alt={movie.title} />
        ) : (
            <FilterMoviePoster type="movie_card" movie={movie} />
        )}
        

        <MovieControls movie={movie} type={type} />
    </div>
  )
}

export default MovieCard