import './Header.css';
import { Link, NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap'
function Header() {
  return (
    <div className="header">
        <div className="container">
          <div className="logo">
            <Link to='/'> Movie Magic </Link>
          </div>

          <ul className="nav-links">
            <li className="dropdown-center nav-link">
                <a className="dropdown-toggle" href="/#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Movie
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/movies/popular">Popular</a></li>
                  <li><a className="dropdown-item" href="/movies/top_rated">Top rated</a></li>
                  <li><a className="dropdown-item" href="/movies/now_playing">Now playing</a></li>
                  <li><a className="dropdown-item" href="/movies/upcoming">Upcoming</a></li>
                </ul>
            </li>

            <li className='nav-link'>
              <NavLink to='/watchlist'>Watch List</NavLink>
            </li>

            <li className='nav-link'>
              <NavLink to='/watched'>Watched</NavLink>

            </li>

            <li className='nav-link add-button'>
              <NavLink className='button' to='/add'>Add</NavLink>
            </li>

          </ul>

        </div>
    </div>
  )
}

export default Header