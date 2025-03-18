import { useEffect, useState } from 'react'
import { Link } from 'react-router';

const API_KEY = 'c601db5c51c26ee89b1634786f766955';
const BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

const Home = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
            .then((response) => response.json())
            .then((data) => setMovies(data.results))
            .catch((error) => console.error("Error fetching movies: ", error));
    }, []);

    return (
        <div className='container mx-auto mt-4 px-4'>
            <h1 className=''>Popular Movies</h1>
            <div>
                {movies.map((movie) => (
                    <Link key={movie.id} to={`/movie/${movie.id}`}>
                        <div>
                            <img 
                                src={IMAGE_BASE_URL + movie.poster_path} 
                                alt={movie.title}
                                className=''
                            />
                            <div>
                                <h2>{movie.title}</h2>
                                <p>Rating: {movie.vote_average}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Home
