// SearchBox.js (as provided)
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import './SearchBox.css';  // Ensure this path is correct
import '../styles.css';

function SearchBox({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(searchTerm);  // Pass search term to parent component
    };

    return (
        <form onSubmit={handleSubmit} className="search-box">
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="What are you looking for?"
                className="search-input"
            />
            <button type="submit" className="search-button">
                <CiSearch className="icon" />
            </button>
        </form>
    );
}

export default SearchBox;
