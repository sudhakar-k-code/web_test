import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import products from "./data/products";
import Category from "./components/Category"; // Import the Category component

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product, selectedSize) => {
    setCart([...cart, { ...product, selectedSize }]);
  };

  return (
    <div className="app">
      <h1>Organic Store</h1>
      <Routes>
        <Route path="/" element={<ProductList products={products} addToCart={addToCart} />} />
        <Route path="/category/:categoryId" element={<Category addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} />} />
      </Routes>
    </div>
  );
};

export default App;
