import React from "react";
import asteroids from "../asteroids";
import { useNavigate } from "react-router";
import "../styles/Shop.css";

const Shop = () => {
  const navigate = useNavigate();

  const navigateRoute = (event) => {
    const id = Number(event.currentTarget.getAttribute("data-id"));
    const targetAsteroid = asteroids.find((asteroid) => asteroid.id === id);

    navigate(`/shop/asteroid/${targetAsteroid.urlName}`);
  };

  const item = (asteroid) => (
    <div key={asteroid.id} className="item-div">
      <h2 className="asteroid-name">{asteroid.name}</h2>
      <p className="asteroid-price">Price: {asteroid.price}</p>
      <img src={asteroid.imgSrc} alt="asteroid" />
      <button data-id={asteroid.id} onClick={navigateRoute}>
        Buy {asteroid.name}
      </button>
    </div>
  );

  return (
    <div className="shop">{asteroids.map((asteroid) => item(asteroid))}</div>
  );
};

export default Shop;
