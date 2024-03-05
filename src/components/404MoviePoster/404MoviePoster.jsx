import React from 'react'
import './404MoviePoster.css'
import { CiImageOn } from "react-icons/ci";

function FilterMoviePoster({type, movie}) {
  return (
    <div className={`filter-poster ${type === "search_result" ? "searchResultPoster" : ""}`}>
        {
          type === "movie_card" && movie.title !== null ? movie.title : <CiImageOn />
        }
        
    </div>
  )
}

export default FilterMoviePoster