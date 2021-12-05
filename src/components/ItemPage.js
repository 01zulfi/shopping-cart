import React from "react";
import { useParams } from "react-router";
import asteroids from "../asteroids";
import cart from "../CartManager";

const ItemPage = ({ setCartLength }) => {
  const params = useParams();
  const targetAsteroid = asteroids.find(
    (asteroid) => asteroid.urlName === params.name
  );

  if (!targetAsteroid) return null;

  const addToCart = () => {
    cart.add(targetAsteroid);
    setCartLength(cart.cartLength);
  };

  return (
    <section className="item-page-section">
      <h1 className="asteroid-name">{targetAsteroid.name}</h1>
      <p className="asteroid-price">{targetAsteroid.price}</p>
      <button
        data-id={targetAsteroid.id}
        className="add-to-cart-button"
        onClick={addToCart}
      >
        Add to cart
      </button>
    </section>
  );
};

export default ItemPage;
