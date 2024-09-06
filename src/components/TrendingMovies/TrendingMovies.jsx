import React, { useEffect, useState } from 'react'
import MovieCard from '../MovieCard/MovieCard';
import axios from 'axios';
import './TrendingMovies.css'
import MovieGrid from '../MovieGrid/MovieGrid';
import Heading from '../heading/Heading';

function TrendingMovies({type, title}) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const url = `${process.env.REACT_APP_API_URL}/movie/${type}?api_key=${process.env.REACT_APP_API_KEY}`;
    axios.get(url)
      .then((res) => {
          if(res.data) {
              setMovies(res.data)
          }
      })
      .catch((error) => {
          console.log(error);
      })
  },[])
  return (

    <>
      {movies.results !== undefined && movies.results.length > 0 ? (
        <div className="trending-list">
          <div className="container">
            <Heading> 
              <h1 className='title'>{title}</h1>

              <a className="button showAll" href={`/movies/${type}`}>
                Show all
              </a>
            </Heading>
              <MovieGrid >
                  {movies.results.slice(0, 10).map((movie) => (
                    <MovieCard key={movie.id} movie={movie} type="trending" />
                  ))}
              </MovieGrid>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  )
}

export default TrendingMovies