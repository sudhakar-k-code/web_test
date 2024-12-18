import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navigation.css";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-header">
        <h1>Organic Store</h1>
        <button className="hamburger" onClick={toggleMenu}>
          ☰
        </button>
      </div>
      <ul className={`navbar-menu ${isMenuOpen ? "open" : ""}`}>
        <li><NavLink to="/" >Home</NavLink></li>
        <li><NavLink to="/shop" >Shop All</NavLink></li>
        <li>
          Categories
          <ul>
            <li><NavLink to="/category/laddo" >Laddo</NavLink></li>
            <li><NavLink to="/category/halwa" >Halwa</NavLink></li>
            <li><NavLink to="/category/sweets" >Sweets</NavLink></li>
          </ul>
        </li>
        <li><NavLink to="/about" >About Us</NavLink></li>
        <li><NavLink to="/blogs" >Blogs</NavLink></li>
        <li><NavLink to="/recipes" >Recipes</NavLink></li>
        <li><NavLink to="/gift-hampers" >Gift Hampers</NavLink></li>
        <li><NavLink to="/insulin-revolution" >Insulin Revolution</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navigation;
