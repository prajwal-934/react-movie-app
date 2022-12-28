import MovieList from '../MovieList/MovieList';
import MovieApi from '../../common/apis/MovieApi'
import MovieApiKey from '../../common/apis/MoviesApiKey'
import { useEffect } from 'react';
import { fetchMovie } from '../../store/thunks/fetchMovie';
import { useDispatch ,useSelector} from 'react-redux';
import { addMovie } from '../../store/slices/movieSlice';
const Home = () => {

    const {isLoading,data,error} = useSelector((state) => {
        return state.movies
    })

  
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchMovie())
    },[dispatch])

    if(isLoading){
        return <h3>isLoading...</h3>
    }

    if(error){
        return <h3>Something went wrong..</h3>
    }
    console.log(data)
    return (
        <div className='home'>
            <div className="movieBanner"></div>
            <MovieList  />
        </div>
    );
};

export default Home;