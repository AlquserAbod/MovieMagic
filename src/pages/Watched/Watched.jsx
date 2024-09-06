import { Link } from 'react-router-dom';
import MovieCard from '../../components/MovieCard/MovieCard';
import './Watched.css'
import { useMovieContext } from '../../Context/GlobelContext';
import MovieGrid from '../../components/MovieGrid/MovieGrid';
import Heading from '../../components/heading/Heading';
function Watched() {
  const MoviesContext = useMovieContext();

  return (
    <div className="watched-list">
      <div className="container">
        <Heading>
          <h1 className='title'>My Watched Movies</h1>
          <span className="movies-count">
            {MoviesContext.watched.length} Movies
          </span>
        </Heading>

        {MoviesContext.watched.length > 0 ? (
          <MovieGrid>
            {MoviesContext.watched.map((movie) => (
              
              <MovieCard key={movie.id} movie={movie} type="watched" />
            ))}
          </MovieGrid>
        ) : (
          <h2 className="no-movies">
            No Movies in Watched list , <Link to="/add"> Add some Movie !!</Link>
          </h2>
        )}
      </div>
    </div>
  )
}

export default Watched