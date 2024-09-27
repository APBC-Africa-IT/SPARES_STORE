import './header.css';
import SearchBox from "../components/SearchBox";
import { IoCartOutline } from "react-icons/io5";
import { MdFavoriteBorder } from "react-icons/md";
import { FiUser } from "react-icons/fi";
import { RxCaretDown } from "react-icons/rx";
import logo from '../assets/logotransparent.png';

const Header = ({ cartCount, onSearch }) => {
    return (
        <div className="header">
            <nav>
                {/* Uncomment to show logo */}
                {/* <div className="logo-container">
                    <a href="/"><img src={logo} alt="Logo" className="logo" /></a>
                </div> */}
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/products">Shop <RxCaretDown className="header-icon" /></a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact Us</a></li>
                    <li className="search-box-container"><SearchBox onSearch={onSearch} /></li>
                    <li><a href="/wishlist"><MdFavoriteBorder className="header-icon" /></a></li>
                    <li>
                        <a href="/cart">
                            <IoCartOutline className="header-icon" />
                            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
                        </a>
                    </li>
                    <li><a href="/user"><FiUser /></a></li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;
