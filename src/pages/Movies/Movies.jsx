import React, { useEffect, useState } from 'react'

import './Movies.css';
import { useParams,useNavigate  } from 'react-router-dom';
import axios from 'axios';
import MovieCard from '../../components/MovieCard/MovieCard';
import Pagination from '../../components/Pagination/Pagination';
import MovieGrid from '../../components/MovieGrid/MovieGrid';
import Heading from '../../components/heading/Heading';

function Movies() {
    const { type } = useParams();
    const [title, setTitle] = useState('');
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const navigate = useNavigate();

    const handlePageChange = (page) => setPage(page);


    useEffect(() => {
        const url = `${process.env.REACT_APP_API_URL}/movie/${type}?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`;

        switch(type) { 
            case "popular":
                setTitle("Popular Movies"); break;
            case "top_rated": 
                setTitle("Top Rated Movies"); break;
            case "now_playing":
                setTitle("Now Playing Movies"); break;
            case "upcoming":
                setTitle("Upcoming Movies"); break;
            default :
            navigate('/404');
            return;
        }

        axios.get(url)
        .then((res) => {
          console.log(res.data);
            if(res.data) {
                setMovies(res.data)
            }
        })
        .catch((error) => {
            console.log(error);
        })
    },[page]);


    return (
        
        <div className='movies-page'>
            {movies.results !== undefined && movies.results.length > 0 ? (
                <div className="container">
                    <Heading>
                        <h1 className='title'>{title}</h1>
                    </Heading>
                    
                    <MovieGrid >
                        {movies.results.map((movie) => (
                            <MovieCard key={movie.id} movie={movie} type="trending" />
                        ))}
                    </MovieGrid>
                    <Pagination pageNumber={page} totalPages={movies.total_pages} handlePageChange={handlePageChange} />
                </div>
            ) : <></>}
        </div>
    )
}

export default Movies