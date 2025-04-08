import { useEffect } from "react";
import { useMoviesContext } from "../context/GlobalContext";
import { FaStar } from "react-icons/fa";

export default function TrendingNow() {
    const { trendingMovies, fetchTrendingMovies } = useMoviesContext();

    useEffect(() => {
        fetchTrendingMovies();
    }, [fetchTrendingMovies]);

    return (
        <div className="container mt-5">
            <h1 className="text-white mb-4">Trending Now</h1>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-6 g-4">
                {trendingMovies.map((movie) => (
                    <div key={movie.id} className="col">
                        <div className="card h-100 movie-card">
                            <img
                                className="poster"
                                src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
                                alt={movie.title || movie.name}
                            />
                            <div className="movie-details">
                                <h4>{movie.title ? movie.title : movie.name}</h4>
                                <p>{movie.original_title ? movie.original_title : movie.original_name}</p>
                                <p>
                                    <img
                                        src={
                                            movie.original_language === "en"
                                                ? "https://flagcdn.com/16x12/gb.png"
                                                : `https://flagcdn.com/w40/${movie.original_language}.png`
                                        }
                                        alt={movie.original_language}
                                        style={{ width: "20px", marginRight: "5px" }}
                                    />
                                    {movie.original_language}
                                </p>
                                <div>
                                    {[...Array(5)].map((_, index) => (
                                        <FaStar
                                            key={index}
                                            color={index < Math.round(movie.vote_average / 2) ? "gold" : "gray"}
                                        />
                                    ))}
                                </div>
                                <p className="overview">{movie.overview}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
