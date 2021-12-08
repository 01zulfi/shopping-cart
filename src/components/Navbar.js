import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = ({ cartLength }) => {
  return (
    <div className="navbar">
      <h1>Asteroids</h1>
      <div className="nav-links">
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/shop/cart">Cart {cartLength}</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
