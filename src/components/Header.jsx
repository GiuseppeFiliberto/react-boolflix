import { useState } from "react";
import { useMoviesContext } from "../context/GlobalContext";

export default function Header() {
    const [searchInput, setSearchInput] = useState('');
    const { movies, setQuery } = useMoviesContext();
    const handleMovieSearch = () => {
        setQuery(searchInput);
    };

    return (
        <>
            <header>
                <div className="container">
                    <div className="mb-3">
                        <input
                            type="text"
                            className="form-control"
                            name="search-bar"
                            id="search-bar"
                            aria-describedby="searchMovieHelper"
                            placeholder="Search a movie"
                            value={searchInput}
                            onChange={(e) => setSearchInput(e.target.value)}
                        />
                    </div>

                    <button
                        className="btn btn-primary"
                        onClick={handleMovieSearch}
                    >
                        Search
                    </button>
                </div>


            </header>
        </>
    );
}