import { useMovieContext } from '../../Context/GlobelContext'
import './ResulteCard.css'
import actions from '../../Context/Actions.json';

import React, { useState } from 'react'
import FilterMoviePoster from '../404MoviePoster/404MoviePoster';

function ResulteCard({movie}) {
    const MovieContext = useMovieContext();

    const [inWatched, setInWatched] = useState(
        MovieContext.watched.find(
            (i) => i.id === movie.id
        )
    );
    const [inWatchlist, setInWatchlist] = useState(
        MovieContext.watchlist.find(
            (i) => i.id === movie.id
        )
    );

    const handleWatchlistAction = () => {
        MovieContext.MoviesDispatch({
            type : inWatchlist ? actions.REMOVE_MOVIE_FROM_WATCHLIST : actions.ADD_MOVIE_TO_WATCHLIST,
            payload: movie
        });
        setInWatchlist(!inWatchlist)
    }

    const handleWatchedAction = () => {
        MovieContext.MoviesDispatch({
            type : inWatched ? actions.REMOVE_MOVIE_FROM_WATCHED : actions.ADD_MOVIE_TO_WATCHED,
            payload: movie
        })
        
        setInWatched(!inWatched)
        setInWatchlist(inWatched)
    }

    return (
        <div className="result-card">
            <div className="poster-wrapper">
                {
                    movie.poster_path ? 
                        <img src={`${process.env.REACT_APP_POSTER_API}/w500${movie.poster_path}`} alt={movie.title} /> :
                        <FilterMoviePoster type="search_result" />
                }
            </div>

            <div className="info">
                <div className="result-card-header">
                    <h3 className="title">{movie.title}</h3>
                    {
                        movie.release_date ? 
                            <h4 className="release-date">{movie.release_date}</h4> : "No data"
                    }
                </div>

                <div className="controls">
                    <button className="button" onClick={() => {handleWatchlistAction()}} disabled={inWatched}>
                        {!inWatchlist ? "Add to watchlist": "Remove from watchlist"}
                    </button>

                    <button className="button" onClick={() => {handleWatchedAction()}}>
                    {!inWatched ? "Add to watched": "Remove from watched"}
                    </button>
                </div>
            </div>

        </div>
    )
}

export default ResulteCard