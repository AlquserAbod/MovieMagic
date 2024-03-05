import { Link } from 'react-router-dom';
import  {useMovieContext} from '../../Context/GlobelContext'
import MovieCard from '../../components/MovieCard/MovieCard';
import './Watchlist.css';
import MovieGrid from '../../components/MovieGrid/MovieGrid';
import Heading from '../../components/heading/Heading';

function Watchlist() {
  const MoviesContext = useMovieContext();
  return (
    <div className="watch-list">
      <div className="container">
        <Heading>
          <h1 className='title'>My Watchlist</h1>
          <span className="movies-count">
            {MoviesContext.watchlist.length} Movies
          </span>
        </Heading>

        {MoviesContext.watchlist.length > 0 ? (
          <MovieGrid>
            {MoviesContext.watchlist.map((movie) => (
              <MovieCard key={movie.id} movie={movie} type="watchlist" />
            ))}
          </MovieGrid>
        ) : (
          <h2 className="no-movies">
            No Movies in your list, <Link to="/add"> Add some Movie !!</Link>
          </h2>
        )}
      </div>
    </div>
  )
}

export default Watchlist