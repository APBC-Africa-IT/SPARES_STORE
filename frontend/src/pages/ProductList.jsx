import React, { useState } from "react";
import Header from "../components/Header";
import '../styles.css';
import { RiCheckboxBlankLine } from "react-icons/ri";
import { IoCheckboxOutline } from "react-icons/io5";
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { PiCaretDown, PiCaretUp } from "react-icons/pi";
import taillight from '../assets/taillight.jpeg'; // Ensure this is used
import oilfilter from '../assets/oilfilter.jpeg';
import h from '../assets/h.jpeg';

const ProductList = () => {
    const [priceRange, setPriceRange] = useState([0, 1000]);
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
    const [cart, setCart] = useState([]);
    const [isCategoryOpen, setIsCategoryOpen] = useState(true);
    const [isBrandOpen, setIsBrandOpen] = useState(true);
    const [isConditionOpen, setIsConditionOpen] = useState(true);

    const handlePriceChange = (value) => {
        setPriceRange(value);
    };

    const handleCategoryClick = (category) => {
        setCheckedCategories(prevState => ({
            ...prevState,
            [category]: !prevState[category]
        }));
    };

    const handleBrandClick = (brand) => {
        setCheckedBrands(prevState => ({
            ...prevState,
            [brand]: !prevState[brand]
        }));
    };

    const handleConditionClick = (condition) => {
        setCheckedConditions(prevState => ({
            ...prevState,
            [condition]: !prevState[condition]
        }));
    };

    const handleAddToCart = (product) => {
        setCart(prevCart => [...prevCart, product]);
    };

    const toggleCategory = () => setIsCategoryOpen(!isCategoryOpen);
    const toggleBrand = () => setIsBrandOpen(!isBrandOpen);
    const toggleCondition = () => setIsConditionOpen(!isConditionOpen);

    const products = [
        { id: 1, name: "Taillight", img: taillight, price: 29.99 },
        { id: 2, name: "Oil Filters", img: oilfilter, price: 29.99 },
        { id: 3, name: "Taillight", img: h, price: 29.99 },
        { id: 4, name: "Taillight", img: oilfilter, price: 29.99 },
        { id: 5, name: "Taillight", img: h, price: 29.99 },
        { id: 6, name: "Taillight", img: taillight, price: 29.99 },
        { id: 7, name: "Taillight", img: h, price: 29.99 },
        { id: 8, name: "Taillight", img: taillight, price: 29.99 },
        { id: 9, name: "Taillight", img: oilfilter, price: 29.99 }
    ];



    return (
        <div>
            <Header cartCount={cart.length} />
            <div className="layout">
                <div className="side-nav">
                    <div className="categories">
                        <p className="filter-header" onClick={toggleCategory}>
                            Product Categories {isCategoryOpen ? <PiCaretUp /> : <PiCaretDown />}
                        </p>
                        {isCategoryOpen && (
                            <ul>
                                <li onClick={() => handleCategoryClick('engineParts')}>
                                    {checkedCategories.engineParts ? <IoCheckboxOutline className="icon" /> : <RiCheckboxBlankLine className="icon" />}
                                    Engine Parts
                                </li>
                                <li onClick={() => handleCategoryClick('transmissionParts')}>
                                    {checkedCategories.transmissionParts ? <IoCheckboxOutline className="icon" /> : <RiCheckboxBlankLine className="icon" />}
                                    Transmission Parts
                                </li>
                                <li onClick={() => handleCategoryClick('electricalComponents')}>
                                    {checkedCategories.electricalComponents ? <IoCheckboxOutline className="icon" /> : <RiCheckboxBlankLine className="icon" />}
                                    Electrical Components
                                </li>
                                <li onClick={() => handleCategoryClick('suspensionParts')}>
                                    {checkedCategories.suspensionParts ? <IoCheckboxOutline className="icon" /> : <RiCheckboxBlankLine className="icon" />}
                                    Suspension Parts
                                </li>
                            </ul>
                        )}
                    </div>

                    <div className="brand">
                        <p className="filter-header" onClick={toggleBrand}>
                            Filter by brand {isBrandOpen ? <PiCaretUp /> : <PiCaretDown />}
                        </p>
                        {isBrandOpen && (
                            <ul className="category-list">
                                <li onClick={() => handleBrandClick('nissan')}>
                                    {checkedBrands.nissan ? <IoCheckboxOutline className="icon" /> : <RiCheckboxBlankLine className="icon" />}
                                    Nissan
                                </li>
                                <li onClick={() => handleBrandClick('subaru')}>
                                    {checkedBrands.subaru ? <IoCheckboxOutline className="icon" /> : <RiCheckboxBlankLine className="icon" />}
                                    Subaru
                                </li>
                                <li onClick={() => handleBrandClick('hyundai')}>
                                    {checkedBrands.hyundai ? <IoCheckboxOutline className="icon" /> : <RiCheckboxBlankLine className="icon" />}
                                    Hyundai
                                </li>
                                <li onClick={() => handleBrandClick('toyota')}>
                                    {checkedBrands.toyota ? <IoCheckboxOutline className="icon" /> : <RiCheckboxBlankLine className="icon" />}
                                    Toyota
                                </li>
                                <li onClick={() => handleBrandClick('volvo')}>
                                    {checkedBrands.volvo ? <IoCheckboxOutline className="icon" /> : <RiCheckboxBlankLine className="icon" />}
                                    Volvo
                                </li>
                                <li onClick={() => handleBrandClick('mercedesBenz')}>
                                    {checkedBrands.mercedesBenz ? <IoCheckboxOutline className="icon" /> : <RiCheckboxBlankLine className="icon" />}
                                    Mercedes-Benz
                                </li>
                            </ul>
                        )}
                    </div>

                    <div className="price">
                        <div className="price-range">
                            <p className="filter-header">Filter by Price Range</p>
                            <p><span>Ksh {priceRange[0]}</span> - <span>Ksh {priceRange[1]}</span></p>
                        </div>
                        <div className="price-slider">
                            <Slider
                                className="custom-slider"
                                range
                                min={0}
                                max={1000}
                                defaultValue={[0, 1000]}
                                onChange={handlePriceChange}
                            />
                        </div>
                    </div>

                    <div className="condition">
                        <p className="filter-header" onClick={toggleCondition}>
                            Filter by condition {isConditionOpen ? <PiCaretUp /> : <PiCaretDown />}
                        </p>
                        {isConditionOpen && (
                            <ul>
                                <li onClick={() => handleConditionClick('new')}>
                                    {checkedConditions.new ? <IoCheckboxOutline className="icon" /> : <RiCheckboxBlankLine className="icon" />}
                                    New
                                </li>
                                <li onClick={() => handleConditionClick('refurbished')}>
                                    {checkedConditions.refurbished ? <IoCheckboxOutline className="icon" /> : <RiCheckboxBlankLine className="icon" />}
                                    Refurbished
                                </li>
                                <li onClick={() => handleConditionClick('used')}>
                                    {checkedConditions.used ? <IoCheckboxOutline className="icon" /> : <RiCheckboxBlankLine className="icon" />}
                                    Used
                                </li>
                            </ul>
                        )}
                    </div>
                </div>

                {/* Main Content */}
                <div className="main-content">
                    <div className="products">
                        {products.map(product => (
                            <div className="product-item" key={product.id}>
                                <img src={product.img} alt={product.name} />
                                <p>{product.name}</p>
                                <p>${product.price}</p>
                                <button className="add-to-cart" onClick={() => handleAddToCart(product)}>Add to Cart</button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductList;
