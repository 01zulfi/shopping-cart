import React from "react";
import { useParams } from "react-router";
import asteroids from "../asteroids";
import cart from "../CartManager";
import "../styles/ItemPage.css";

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
      <img src={targetAsteroid.imgSrc} alt="asteroid" />
      <div className="break-line"></div>
      <div className="content">
        <h1 className="asteroid-name">{targetAsteroid.name}</h1>
        <p className="asteroid-price">Price: {targetAsteroid.price}</p>
        <p>{targetAsteroid.desc}</p>
        <a href={targetAsteroid.source} target="_blank" rel="noreferrer">
          Source
        </a>
        <button
          data-id={targetAsteroid.id}
          className="add-to-cart-button"
          onClick={addToCart}
        >
          Add to cart
        </button>
      </div>
    </section>
  );
};

export default ItemPage;
