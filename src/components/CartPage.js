import React, { useState } from "react";
import CartItem from "./CartItem";
import cart from "../CartManager";

const CartPage = () => {
  const [items, setItems] = useState(cart.cart);
  const [total, setTotal] = useState(cart.total);

  const setTotalHandler = (value) => setTotal(value);

  const deleteButtonHandler = (event) => {
    const id = Number(event.target.getAttribute("data-id"));
    cart.remove(id);
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
        />
        <button
          data-id={item.id}
          className="delete-item"
          onClick={deleteButtonHandler}
        >
          Delete
        </button>
        <hr />
      </div>
    );
  };

  return (
    <div className="cart">
      <h1>Cart</h1>
      {items.map(mapCallback)}
      <h3>{total}</h3>
    </div>
  );
};

export default CartPage;
