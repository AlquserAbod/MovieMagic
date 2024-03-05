import React from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa6'

import { FaTimes } from 'react-icons/fa'
import { useMovieContext } from '../../Context/GlobelContext'
import actions from '../../Context/Actions.json'
import { GoBookmarkSlashFill, GoBookmarkFill } from "react-icons/go";

import './MovieControls.css'

function MovieControls ({movie, type }) {
    const MovieContext = useMovieContext();
    const isInWatchlist = MovieContext.watchlist.some((filterMovie) => filterMovie.id === movie.id);
    const isInWatched = MovieContext.watched.some((filterMovie) => filterMovie.id === movie.id);

    const handleControlClick = (action) => {
        MovieContext.MoviesDispatch({
            type:action,
            payload: movie
        })
    }
    
  return (
    <div className='movie_controls'>
        {
            type === "watchlist" && (
                <>
                    <button className='control-btn'
                            onClick={() => {handleControlClick(actions.ADD_MOVIE_TO_WATCHED)}}>
                        <FaEye />
                    </button>

                    <button className='control-btn' 
                            onClick={() => {handleControlClick(actions.REMOVE_MOVIE_FROM_WATCHLIST)}}>
                        <FaTimes />
                    </button>
                </>
            )
        }
        {
            type === "watched" && (
                <>
                    <button className='control-btn'
                            onClick={() => {handleControlClick(actions.MOVE_TO_WATCHLIST)}}>
                        <FaEyeSlash />
                    </button>

                    <button className='control-btn'
                            onClick={() => {handleControlClick(actions.REMOVE_MOVIE_FROM_WATCHED)}}>
                        <FaTimes />
                    </button>
                </>
            )
        }

        {
            type === "trending" && (
                <>
                    <button className='control-btn'
                            onClick={() => {handleControlClick(
                                isInWatchlist ? actions.REMOVE_MOVIE_FROM_WATCHLIST :  actions.MOVE_TO_WATCHLIST)}}>

                        {isInWatchlist ? <GoBookmarkSlashFill /> : <GoBookmarkFill />}

                    </button>

                    <button className='control-btn'
                            onClick={() => {handleControlClick(
                                isInWatched ? actions.REMOVE_MOVIE_FROM_WATCHED : actions.ADD_MOVIE_TO_WATCHED)}}>
                        {isInWatched ? <FaEyeSlash /> : <FaEye />}

                        
                        
                    </button>
                </>
            )
        }
    </div>
  )
}

export default MovieControls