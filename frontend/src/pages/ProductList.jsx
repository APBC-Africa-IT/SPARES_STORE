import React, { useState } from "react";
import Header from "../components/Header";
import '../styles.css';
import { RiCheckboxBlankLine } from "react-icons/ri";
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const ProductList = () => {
    const [priceRange, setPriceRange] = useState([0, 1000]);

    const handlePriceChange = (value) => {
        setPriceRange(value);
    };

    return (
        <div>
            <Header />

            <div className="layout">
                {/* Side Navigation */}
                <div className="side-nav">
                    <p>Product Categories</p>
                    <ul>
                        <li><RiCheckboxBlankLine className="icon" />Engine Parts</li>
                        <li><RiCheckboxBlankLine className="icon" />Transmission Parts</li>
                        <li><RiCheckboxBlankLine className="icon" />Electrical Components</li>
                        <li><RiCheckboxBlankLine className="icon" /> Parts</li>
                        <li><RiCheckboxBlankLine className="icon" />Suspension Parts</li>
                    </ul>
                    <p>Filter by brand</p>
                    <ul>
                        <li><RiCheckboxBlankLine className="icon" />Engine Parts</li>
                        <li><RiCheckboxBlankLine className="icon" />Transmission Parts</li>
                        <li><RiCheckboxBlankLine className="icon" />Electrical Components</li>
                        <li><RiCheckboxBlankLine className="icon" /> Parts</li>
                        <li><RiCheckboxBlankLine className="icon" />Suspension Parts</li>
                    </ul>
                    <p>Filter by price range</p>
                    <div className="price-range">
                        <span>Ksh{priceRange[0]}</span> - <span>Ksh{priceRange[1]}</span>
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

                    <p>Filter by condition</p>
                    <ul>
                        <li><RiCheckboxBlankLine className="icon" />Engine Parts</li>
                        <li><RiCheckboxBlankLine className="icon" />Transmission Parts</li>
                        <li><RiCheckboxBlankLine className="icon" />Electrical Components</li>
                        <li><RiCheckboxBlankLine className="icon" /> Parts</li>
                        <li><RiCheckboxBlankLine className="icon" />Suspension Parts</li>
                    </ul>
                </div>

                {/* Main Content */}
                <div className="main-content">
                    <h2>Our Products</h2>
                    <ul>
                        <li>Product 1</li>
                        <li>Product 2</li>
                        <li>Product 3</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ProductList;
