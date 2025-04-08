import { useEffect } from "react";
import { useMoviesContext } from "../context/GlobalContext";

export default function TrendingNow() {
    const { trendingMovies, fetchTrendingMovies } = useMoviesContext();

    useEffect(() => {
        fetchTrendingMovies();
    }, [fetchTrendingMovies]);

    return (
        <div className="container mt-5">
            <h1 className="text-white mb-4">Trending Now</h1>
            <div className="row">
                {trendingMovies.map((movie) => (
                    <div className="col-md-3 mb-4" key={movie.id}>
                        <div className="card bg-dark text-white">
                            <img
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                className="card-img-top"
                                alt={movie.title}
                            />
                            <div className="card-body">
                                <h5 className="card-title">{movie.title}</h5>
                                <p className="card-text">
                                    {movie.overview.substring(0, 100)}...
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
