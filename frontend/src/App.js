import React, { useState } from 'react';
import './App.css';
import ProductList from './pages/ProductList';
import Header from "./components/Header";

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [cart, setCart] = useState([]);
  const [checkedConditions, setCheckedConditions] = useState([]);

  const products = [
    { id: 1, name: 'Product 1', price: 100, img: 'path/to/image1.jpg' },
    { id: 2, name: 'Product 2', price: 200, img: 'path/to/image2.jpg' },
    // Add more products as needed
  ];

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  const handleConditionClick = (condition) => {
    // Logic to handle condition click
    // Example: toggle condition in checkedConditions array
    setCheckedConditions(prevConditions =>
      prevConditions.includes(condition)
        ? prevConditions.filter(c => c !== condition)
        : [...prevConditions, condition]
    );
  };

  return (
    <div>
      <Header cartCount={cart.length} onSearch={handleSearch} /> {/* Pass handleSearch as onSearch */}
      <ProductList
        products={products}
        searchQuery={searchQuery}
        handleAddToCart={handleAddToCart}
        handleConditionClick={handleConditionClick}
        checkedConditions={checkedConditions}
      />
    </div>
  );
};

export default App;
