// src/components/ProductCard.jsx
import React, { useState } from "react";

const ProductCard = ({ product, addToCart }) => {
  const [selectedSize, setSelectedSize] = useState(null);

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} style={{ width: '100%', height: 'auto' }} />
      <h3>{product.name}</h3>
      <p>Category: {product.category}</p>
      <p>Price Range: ₹{product.price[0]} - ₹{product.price[product.price.length - 1]}</p>
      
      <div>
        {product.sizes.map((size, index) => (
          <button
            key={index}
            onClick={() => handleSizeSelect(size)}
            className={selectedSize === size ? "active" : ""}
          >
            {size.label}
          </button>
        ))}
      </div>

      {selectedSize && <p>Price: ₹{selectedSize.price}</p>}
      <button
        onClick={() => selectedSize && addToCart({ ...product, selectedSize })}
        disabled={!selectedSize}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
