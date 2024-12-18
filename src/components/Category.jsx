import React from "react";
import { useParams } from "react-router-dom";
import products from "../data/products"; // Corrected path
import ProductList from "./ProductList"; // Corrected relative path to ProductList

const Category = ({ addToCart }) => {
  const { categoryId } = useParams();

  // Filter products based on the categoryId
  const filteredProducts = products.filter(
    (product) => product.category.toLowerCase() === categoryId.toLowerCase()
  );

  return (
    <div>
      <h2>{categoryId.charAt(0).toUpperCase() + categoryId.slice(1)} Collection</h2>
      <ProductList products={filteredProducts} addToCart={addToCart} />
    </div>
  );
};

export default Category;
