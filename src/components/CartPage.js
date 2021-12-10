import React, { useState } from "react";
import CartItem from "./CartItem";
import cart from "../CartManager";
import "../styles/CartPage.css";

const CartPage = ({ setCartLength }) => {
  const [items, setItems] = useState(cart.cart);
  const [total, setTotal] = useState(cart.total);

  const setTotalHandler = (value) => setTotal(value);

  const deleteButtonHandler = (event) => {
    const id = Number(event.target.getAttribute("data-id"));
    cart.remove(id);
    setCartLength(cart.cartLength);
    setTotalHandler(cart.total);
    setItems(cart.cart);
  };

  const mapCallback = (item) => {
    return (
      <div className="cart-item-wrapper" key={item.id}>
        <CartItem
          name={item.name}
          price={item.price}
          id={item.id}
          quantity={item.quantity}
          setTotalHandler={setTotalHandler}
          setCartLength={setCartLength}
        />
        <button
          data-id={item.id}
          className="delete-item"
          onClick={deleteButtonHandler}
        >
          Delete
        </button>
      </div>
    );
  };

  const removeCartItems = () => {
    const cartItems = document.body.querySelector(".cart-item-wrapper");
    if (cartItems) cartItems.remove();
  };

  const checkoutHandler = () => {
    cart.clear();
    setCartLength(cart.cartLength);
    setTotalHandler(cart.total);
    removeCartItems();
  };

  return (
    <div className="cart">
      <h1>Cart</h1>
      {items.map(mapCallback)}
      <div className="checkout">
        <h2>Total: {total}</h2>
        <button onClick={checkoutHandler}>Checkout</button>
      </div>
    </div>
  );
};

export default CartPage;
