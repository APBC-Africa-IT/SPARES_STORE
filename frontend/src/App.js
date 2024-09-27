import React, { useState } from 'react';
import './App.css';
import ProductList from './pages/ProductList';

const App = () => {
  const [searchQuery] = useState('');
  const [cart, setCart] = useState([]);
  const [checkedConditions, setCheckedConditions] = useState([]);

  const products = [
    { id: 1, name: 'Product 1', price: 100, img: 'path/to/image1.jpg' },
    { id: 2, name: 'Product 2', price: 200, img: 'path/to/image2.jpg' },
    // Add more products as needed
  ];


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
