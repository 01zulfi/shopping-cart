import React, { useState } from "react";
import cart from "../CartManager";
import "../styles/CartItem.css";

const CartItem = ({
  name,
  price,
  id,
  quantity,
  setTotalHandler,
  setCartLength,
}) => {
  const [stateQuantity, setStateQuantity] = useState(quantity);
  const [spanMessage, setSpanMessage] = useState("");

  const decrementQuantity = () => {
    if (stateQuantity === 1) return;
    setSpanMessage("");
    cart.decrementQuantity(id);
    setTotalHandler(cart.total);
    setCartLength(cart.cartLength);
    setStateQuantity(cart.find(id).quantity);
  };

  const incrementQuantity = () => {
    setSpanMessage("");
    cart.incrementQuantity(id);
    setTotalHandler(cart.total);
    setCartLength(cart.cartLength);
    setStateQuantity(cart.find(id).quantity);
  };

  const setQuantity = (event) => {
    if (event.target.value < 1) {
      setSpanMessage("Quantity must be greater than 1");
      return;
    }

    setSpanMessage("");
    cart.setQuantity(id, Number(event.target.value));
    setTotalHandler(cart.total);
    setCartLength(cart.cartLength);
    setStateQuantity(cart.find(id).quantity);
  };

  return (
    <div className="cart-item-div" key={id}>
      <div className="name-and-price">
        <p>Name:</p>
        <p>Price:</p>
      </div>
      <div className="name-and-price">
        <p>{name}</p>
        <p>{price}</p>
      </div>
      <div className="quantity-div">
        <button className="decrement-button" onClick={decrementQuantity}>
          -
        </button>
        <label htmlFor="quantity-input" className="quantity-input">
          Quantity:
          <input
            type="number"
            id="quantity-input"
            onChange={setQuantity}
            value={stateQuantity}
          />
        </label>
        <button className="increment-button" onClick={incrementQuantity}>
          +
        </button>
      </div>
      <span>{spanMessage}</span>
    </div>
  );
};

export default CartItem;
