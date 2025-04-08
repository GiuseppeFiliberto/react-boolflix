import { useState } from "react";
import { useMoviesContext } from '../context/GlobalContext';
import { FaStar } from "react-icons/fa";
import Header from "../components/Header";

export default function Home() {
    const { movies, setQuery } = useMoviesContext();



    return (
        <>
            <Header />

            <main>
                <section>
                    <div className="p-5">
                        <h1 className="display-2 text-white fw-bolder mb-2">Movie Search</h1>
                        <p className="mb-4 text-white">Search for your favorite movies and TV shows.</p>
                        {movies.length > 0 ? (
                            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-6 g-4">
                                {movies.map((movie) => (
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
                                                    {movie.original_language.toUpperCase()}
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
                        ) : (
                            <p className="text-center">No movies found. Try searching for something else.</p>
                        )}
                    </div>

                </section>
            </main>


        </>
    );

}

