import React from "react";
import './header.css';
import SearchBox from "../components/SearchBox";
import { IoCartOutline } from "react-icons/io5";
import { MdFavoriteBorder } from "react-icons/md";
import { FiUser } from "react-icons/fi";
import { RxCaretDown } from "react-icons/rx";
import logo from '../assets/logotransparent.png';

const Header = () => {
    const handleSearch = (searchTerm) => {
        console.log('Searching for:', searchTerm);
        // Implement search functionality here
    };

    return (
        <div className="header">
            <nav>
                <div className="logo-container">
                    <a href="/"><img src={logo} alt="Logo" className="logo" /></a>
                </div>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/products">Shop <RxCaretDown className="icon" /></a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact Us</a></li>
                    <li><SearchBox onSearch={handleSearch} /></li>
                    <li><a href="/wishlist"><MdFavoriteBorder className="icon" /> </a></li>
                    <li><a href="/cart"><IoCartOutline className="icon" /></a></li>
                    <li><a href="/profile"><FiUser className="icon" /> </a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;

