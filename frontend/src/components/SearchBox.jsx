import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import './SearchBox.css'; // Make sure this file contains necessary styles

const SearchBox = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState("");

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (searchTerm.trim()) {
            onSearch(searchTerm);
        }
    };

    return (
        <form className="search-box" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="What are you looking for?"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />

        </form>
    );
};

export default SearchBox;
