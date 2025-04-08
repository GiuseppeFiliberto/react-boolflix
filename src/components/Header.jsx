import { useState } from "react";
import { useMoviesContext } from "../context/GlobalContext";
import Logo from "../assets/Logonetflix.png";

export default function Header({ onSearchSubmit }) {
    const [searchInput, setSearchInput] = useState('');
    const { setQuery } = useMoviesContext();

    const handleMovieSearch = () => {
        setQuery(searchInput);
        if (onSearchSubmit) {
            onSearchSubmit();
        }
    };

    return (
        <>
            <header className="bg-dark text-white py-3">
                <div className="d-flex justify-content-between mx-5">
                    <div className="logo">
                        <img src={Logo} alt="" style={{ width: "200px" }} />
                    </div>
                    <div className="mb-3 d-flex gap-2">
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
                        <button
                            className="btn btn-primary ml-3"
                            type="button"
                            onClick={handleMovieSearch}
                        >
                            Search
                        </button>
                    </div>
                </div>
            </header>
        </>
    );
}