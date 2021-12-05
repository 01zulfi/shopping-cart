import React from "react";
import cart from "../CartManager";

const Cart = () => {
  return (
    <div className="cart">
      <h1>Cart</h1>
      {JSON.stringify(cart.cart)}
    </div>
  );
};

export default Cart;
