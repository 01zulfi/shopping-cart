import React from "react";
import cart from "../CartManager";

const CartPage = () => {
  const cartItem = ({ name, price, id }) => {
    return (
      <div className="cart-item-div" key={id}>
        <h2>{name}</h2>
        <p>{price}</p>
      </div>
    );
  };

  return (
    <div className="cart">
      <h1>Cart</h1>
      {cart.cart.map((item) => cartItem(item))}
      <h3>{cart.total}</h3>
    </div>
  );
};

export default CartPage;
