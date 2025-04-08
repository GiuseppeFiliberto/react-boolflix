import { createContext, useState, useContext, useEffect } from 'react';

const GlobalContext = createContext();


function GlobalProvider({ children }) {
    const [query, setQuery] = useState('')
    const [movies, setMovies] = useState([])
    const [trendingMovies, setTrendingMovies] = useState([]);
    const api_key = import.meta.env.VITE_MOVIE_DB_API_KEY;


    useEffect(() => {
        if (query) {
            const base_movies_api_url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${query}`;
            console.log('API URL:', base_movies_api_url);

            fetch(base_movies_api_url)
                .then(res => res.json())
                .then(data => {
                    console.log('Movies Data:', data);
                    setMovies(data.results); // Update the movies state with fetched data
                })
                .catch(err => console.error('Fetch Error:', err));
        }
    }, [query]);



    function useFetchTrendingMovies() {
        useEffect(() => {
            fetch(
                `https://api.themoviedb.org/3/trending/movie/?api_key=${api_key}`
            )
                .then((res) => res.json())
                .then((data) => {
                    setTrendingMovies(data.results);
                })
                .catch((err) => {
                    console.log("ERROR", err);
                });
        }, [trendingMovies]);
        const topTenTrending = trendingMovies.slice(0, 10);
        return topTenTrending;
    }

    const fetchTrendingMovies = async () => {
        try {
            const api_key = import.meta.env.VITE_MOVIE_DB_API_KEY;
            const response = await fetch(
                `https://api.themoviedb.org/3/trending/movie/week?api_key=${api_key}`
            );
            const data = await response.json();
            setTrendingMovies(data.results);
        } catch (error) {
            console.error("Error fetching trending movies:", error);
        }
    };

    return (
        <GlobalContext.Provider value={{ movies, setMovies, query, setQuery, trendingMovies, setTrendingMovies, fetchTrendingMovies }}>
            {children}
        </GlobalContext.Provider>
    )
}




//Custom hook context
function useMoviesContext() {
    const context = useContext(GlobalContext)
    return context
}

export { GlobalProvider, useMoviesContext }