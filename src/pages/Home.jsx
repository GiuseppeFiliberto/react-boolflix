import { useState } from "react";
import { useMoviesContext } from '../context/GlobalContext';
import Header from "../components/Header";

export default function Home() {
    const { movies, setQuery } = useMoviesContext();
    const [searchInput, setSearchInput] = useState('');

    const handleMovieSearch = () => {
        setQuery(searchInput);
    };

    return (
        <>
            <Header />

        </>
    );
}
