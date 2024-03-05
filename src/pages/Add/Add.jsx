import { useEffect, useState } from 'react'
import './Add.css'

import axios from 'axios';
import ResulteCard from '../../components/ResulteCard/ResulteCard';
import Pagination from '../../components/Pagination/Pagination';
import TrendingMovies from '../../components/TrendingMovies/TrendingMovies';

function Add() {
    const [searchValue, setSearchValue] = useState('');
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const handleSearch = (e) => setSearchValue(e.target.value);

    const handlePageChange = (page) => setPage(page);

    useEffect(() => {
        const movie = searchValue.trim().toLowerCase();


        const url = `${process.env.REACT_APP_API_URL}/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${movie}&page=${page}`;

        axios.get(url)
            .then((res) => {
                if(res.data) {
                    setMovies(res.data)
                }
            })
            .catch((error) => {
                console.log(error);
            })
            
        if(movie === '') setMovies([])
    },[searchValue,page])

    return (
        <div className="add-page">
            <div className="container">
                <div className="add-content">
                    <div className="input-container">
                        <input type="text" 
                        placeholder="Search for a Movie" 
                        value={searchValue} 
                        onChange={handleSearch} />
                    </div>
                </div>

                { movies.results !== undefined && movies.results.length > 0 ?
                        <ul className="results">
                            {movies.results.map((movie) => (
                                <li key={movie.id}>
                                    {<ResulteCard  movie={movie} /> }
                                </li>
                            ))}
                            <li>
                                <Pagination pageNumber={page} totalPages={movies.total_pages} handlePageChange={handlePageChange} />
                            </li>
                        </ul>: 
                        <>
                            <TrendingMovies type={'popular'} title= "Popular Movies" /> 
                            <br /> <br /> 
                            <TrendingMovies type={'top_rated'} title= "Top Rated Movies" /> 
                            <br /> <br />
                            <TrendingMovies type={'now_playing'} title= "Now Playing Movies" /> 
                            <br /> <br />
                            <TrendingMovies type={'upcoming'} title= "Upcoming Movies" /> 
                        </>
                }
            </div>

            
        </div>
    )


}

export default Add 