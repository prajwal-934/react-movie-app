import './MovieCard.css'
const MovieCard = ({ movie }) => {
    return (
        <div className="card">
            <img src={movie.Poster} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{movie.Title}</h5>
                <p className="card-text"><small className="text-muted">{movie.Year}</small></p>
            </div>
        </div>
    );
};

export default MovieCard;