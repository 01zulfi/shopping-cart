import React from "react";
import { Link } from "react-router-dom";
import cartIcon from "../icons/cart.svg";
import "../styles/Navbar.css";

const Navbar = ({ cartLength }) => {
  return (
    <div className="navbar">
      <h1>Asteroid Store</h1>
      <div className="nav-links">
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li className="cart-link">
            <Link to="/shop/cart">
              <img src={cartIcon} alt="cart" />
              <p>{cartLength}</p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
