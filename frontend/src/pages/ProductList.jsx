import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import '../styles.css';
import { RiCheckboxBlankLine } from "react-icons/ri";
import { IoCheckboxOutline } from "react-icons/io5";
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { PiCaretDown } from "react-icons/pi";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { PiNumberSquareOneLight, PiNumberSquareTwoLight, PiNumberSquareThreeLight } from 'react-icons/pi';
import taillight from '../assets/taillight.jpeg';
import oilfilter from '../assets/oilfilter.jpeg';
import h from '../assets/h.jpeg';

const ProductList = () => {
    const [priceRange, setPriceRange] = useState([0, 1000]);
    const [cart, setCart] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState(''); // State for search query
    const [checkedCategories, setCheckedCategories] = useState({
        engineParts: false,
        transmissionParts: false,
        electricalComponents: false,
        suspensionParts: false,
    });
    const [checkedBrands, setCheckedBrands] = useState({
        nissan: false,
        subaru: false,
        hyundai: false,
        toyota: false,
        volvo: false,
        mercedesBenz: false,
    });
    const [checkedConditions, setCheckedConditions] = useState({
        new: false,
        refurbished: false,
        used: false,
    });

    const productsPerPage = 9;

    // Full product list
    const products = [
        { id: 1, name: "Taillight", img: taillight, price: 29.99 },
        { id: 2, name: "Oil Filters", img: oilfilter, price: 29.99 },
        { id: 3, name: "Headlight", img: h, price: 49.99 },
        { id: 4, name: "Oil Filters", img: oilfilter, price: 39.99 },
        { id: 5, name: "Taillight", img: h, price: 29.99 },
        { id: 6, name: "Headlight", img: taillight, price: 19.99 },
        { id: 7, name: "Taillight", img: h, price: 29.99 },
        { id: 8, name: "Taillight", img: taillight, price: 29.99 },
        { id: 9, name: "Oil Filters", img: oilfilter, price: 29.99 },
        { id: 10, name: "Taillight", img: oilfilter, price: 29.99 },
        { id: 11, name: "Taillight", img: oilfilter, price: 29.99 }
    ];

    // Function to handle search
    const handleSearch = (query) => {
        setSearchQuery(query); // Update search query when user types
    };

    // Function to handle filtering by category
    const handleCategoryClick = (category) => {
        setCheckedCategories(prevState => ({
            ...prevState,
            [category]: !prevState[category]
        }));
    };

    // Function to handle filtering by brand
    const handleBrandClick = (brand) => {
        setCheckedBrands(prevState => ({
            ...prevState,
            [brand]: !prevState[brand]
        }));
    };

    // Function to handle filtering by condition
    const handleConditionClick = (condition) => {
        setCheckedConditions(prevState => ({
            ...prevState,
            [condition]: !prevState[condition]
        }));
    };

    // Function to handle price range change
    const handlePriceChange = (value) => {
        setPriceRange(value);
    };

    // Filter products based on search query, price range, and category/brand/condition
    const filteredProducts = products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
        return matchesSearch && matchesPrice;
    });

    // Calculate total number of pages based on filtered products
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

    // Get the products for the current page
    const currentProducts = filteredProducts.slice(
        (currentPage - 1) * productsPerPage,
        currentPage * productsPerPage
    );

    const handleAddToCart = (product) => {
        setCart(prevCart => [...prevCart, product]);
    };

    const renderPageIcons = () => {
        const pageIcons = [];

        for (let i = 1; i <= totalPages; i++) {
            if (i === 1) {
                pageIcons.push(
                    <PiNumberSquareOneLight
                        key={i}
                        className={currentPage === i ? 'active' : ''}
                        onClick={() => setCurrentPage(i)}
                    />
                );
            } else if (i === 2) {
                pageIcons.push(
                    <PiNumberSquareTwoLight
                        key={i}
                        className={currentPage === i ? 'active' : ''}
                        onClick={() => setCurrentPage(i)}
                    />
                );
            } else if (i === 3) {
                pageIcons.push(
                    <PiNumberSquareThreeLight
                        key={i}
                        className={currentPage === i ? 'active' : ''}
                        onClick={() => setCurrentPage(i)}
                    />
                );
            }
            // Add more icons as needed or dynamically create the corresponding icons
        }

        return pageIcons;
    };

    // Function to go to the previous page
    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    // Function to go to the next page
    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    // Toggle side navigation
    useEffect(() => {
        const filterToggle = document.querySelector('.filter-toggle');
        const sideNav = document.querySelector('.side-nav');

        const toggleSideNav = () => {
            sideNav.classList.toggle('show');
        };

        filterToggle.addEventListener('click', toggleSideNav);

        // Cleanup listener on unmount
        return () => {
            filterToggle.removeEventListener('click', toggleSideNav);
        };
    }, []);

    return (
        <div>
            {/* Pass handleSearch to Header */}
            <Header cartCount={cart.length} onSearch={handleSearch} />

            <div className="layout">
                <div className="side-nav">
                    <button className="filter-toggle">Toggle Filters</button>
                    <div className="categories">
                        <p>Product Categories <PiCaretDown /></p>
                        <ul>
                            <li onClick={() => handleCategoryClick('engineParts')}>
                                <span className="category-item">
                                    {checkedCategories.engineParts ? (
                                        <IoCheckboxOutline className="icon" />
                                    ) : (
                                        <RiCheckboxBlankLine className="icon" />
                                    )}
                                    Engine Parts
                                </span>
                            </li>
                            <li onClick={() => handleCategoryClick('transmissionParts')}>
                                <span className="category-item">
                                    {checkedCategories.transmissionParts ? (
                                        <IoCheckboxOutline className="icon" />
                                    ) : (
                                        <RiCheckboxBlankLine className="icon" />
                                    )}
                                    Transmission Parts
                                </span>
                            </li>
                            <li onClick={() => handleCategoryClick('electricalComponents')}>
                                <span className="category-item">
                                    {checkedCategories.electricalComponents ? (
                                        <IoCheckboxOutline className="icon" />
                                    ) : (
                                        <RiCheckboxBlankLine className="icon" />
                                    )}
                                    Electrical Components
                                </span>
                            </li>
                            <li onClick={() => handleCategoryClick('suspensionParts')}>
                                <span className="category-item">
                                    {checkedCategories.suspensionParts ? (
                                        <IoCheckboxOutline className="icon" />
                                    ) : (
                                        <RiCheckboxBlankLine className="icon" />
                                    )}
                                    Suspension Parts
                                </span>
                            </li>
                        </ul>
                    </div>

                    <div className="brand">
                        <p>Filter by Brand <PiCaretDown /></p>
                        <ul className="category-list">
                            <li onClick={() => handleBrandClick('nissan')}>
                                <span className="category-item">
                                    {checkedBrands.nissan ? (
                                        <IoCheckboxOutline className="icon" />
                                    ) : (
                                        <RiCheckboxBlankLine className="icon" />
                                    )}
                                    Nissan
                                </span>
                            </li>
                            <li onClick={() => handleBrandClick('subaru')}>
                                <span className="category-item">
                                    {checkedBrands.subaru ? (
                                        <IoCheckboxOutline className="icon" />
                                    ) : (
                                        <RiCheckboxBlankLine className="icon" />
                                    )}
                                    Subaru
                                </span>
                            </li>
                            <li onClick={() => handleBrandClick('hyundai')}>
                                <span className="category-item">
                                    {checkedBrands.hyundai ? (
                                        <IoCheckboxOutline className="icon" />
                                    ) : (
                                        <RiCheckboxBlankLine className="icon" />
                                    )}
                                    Hyundai
                                </span>
                            </li>
                            <li onClick={() => handleBrandClick('toyota')}>
                                <span className="category-item">
                                    {checkedBrands.toyota ? (
                                        <IoCheckboxOutline className="icon" />
                                    ) : (
                                        <RiCheckboxBlankLine className="icon" />
                                    )}
                                    Toyota
                                </span>
                            </li>
                            <li
                                onClick={() => handleBrandClick('volvo')}>
                                <span className="category-item">
                                    {checkedBrands.volvo ? (
                                        <IoCheckboxOutline className="icon" />
                                    ) : (
                                        <RiCheckboxBlankLine className="icon" />
                                    )}
                                    Volvo
                                </span>
                            </li>
                            <li onClick={() => handleBrandClick('mercedesBenz')}>
                                <span className="category-item">
                                    {checkedBrands.mercedesBenz ? (
                                        <IoCheckboxOutline className="icon" />
                                    ) : (
                                        <RiCheckboxBlankLine className="icon" />
                                    )}
                                    Mercedes-Benz
                                </span>
                            </li>
                        </ul>
                    </div>

                    <div className="price">
                        <div className="price-range">
                            <span>${priceRange[0]}</span> - <span>${priceRange[1]}</span>
                        </div>
                        <div className="price-slider">
                            <Slider
                                range
                                min={0}
                                max={1000}
                                defaultValue={[0, 1000]}
                                onChange={handlePriceChange}
                            />
                        </div>
                    </div>

                    <div className="condition">
                        <p>Filter by Condition <PiCaretDown /></p>
                        <ul>
                            <li onClick={() => handleConditionClick('new')}>
                                <span className="category-item">
                                    {checkedConditions.new ? (
                                        <IoCheckboxOutline className="icon" />
                                    ) : (
                                        <RiCheckboxBlankLine className="icon" />
                                    )}
                                    New
                                </span>
                            </li>
                            <li onClick={() => handleConditionClick('refurbished')}>
                                <span className="category-item">
                                    {checkedConditions.refurbished ? (
                                        <IoCheckboxOutline className="icon" />
                                    ) : (
                                        <RiCheckboxBlankLine className="icon" />
                                    )}
                                    Refurbished
                                </span>
                            </li>
                            <li onClick={() => handleConditionClick('used')}>
                                <span className="category-item">
                                    {checkedConditions.used ? (
                                        <IoCheckboxOutline className="icon" />
                                    ) : (
                                        <RiCheckboxBlankLine className="icon" />
                                    )}
                                    Used
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="main-content">
                    <div className="products">
                        {currentProducts.length > 0 ? (
                            currentProducts.map((product) => (
                                <div className="product-item" key={product.id}>
                                    <img src={product.img} alt={product.name} />
                                    <p>{product.name}</p>
                                    <p>${product.price}</p>
                                    <button className="add-to-cart" onClick={() => handleAddToCart(product)}>
                                        Add to Cart
                                    </button>
                                </div>
                            ))
                        ) : (
                            <p>No products found</p>
                        )}
                    </div>

                    {/* Pagination */}
                    <div className="pagination">
                        <IoIosArrowRoundBack onClick={handlePreviousPage} /> {/* Back arrow */}
                        {renderPageIcons()} {/* Render page number icons */}
                        <IoIosArrowRoundForward onClick={handleNextPage} /> {/* Forward arrow */}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default ProductList;
