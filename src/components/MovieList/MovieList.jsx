import { useSelector } from "react-redux";
import './MovieList'
import MovieCard from '../MovieCard/MovieCard'
const MovieList = () => {
    
    const {isLoading,data,error} = useSelector((state) => {
        return state.movies
    })

    console.log(data)
    
    const renderMovies = data.map((movie)=>{
        return <MovieCard key={movie.imdbID} movie={movie}/>
    })

    

    
    return (
        <div className='movieList container'>
            <h2 className="movieListHeading">MOVIES</h2>
            {
                isLoading ? <h1>Loading....</h1>: <div className="d-flex flex-wrap gap-4 justify-content-start">{renderMovies}</div>
            }
        </div>
    );
};

export default MovieList;