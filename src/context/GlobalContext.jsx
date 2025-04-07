import { createContext, useState, useContext, useEffect } from 'react';

const GlobalContext = createContext();


function GlobalProvider({ children }) {
    const [query, setQuery] = useState('')
    const [movies, setMovies] = useState([])

    useEffect(() => {
        const api_key = import.meta.env.VITE_MOVIE_DB_API_KEY;
        const base_movies_api_url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${query}`;
        console.log('API URL:', base_movies_api_url);

        fetch(base_movies_api_url)
            .then(res => res.json())
            .then(data => console.log('Movies Data:', data))
            .catch(err => console.error('Fetch Error:', err));
    }, [query]);






    return (
        <GlobalContext.Provider value={{ movies, setMovies, query, setQuery }}>
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