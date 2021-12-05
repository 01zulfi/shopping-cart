import React from "react";
import asteroids from "../asteroids";
import { useNavigate } from "react-router";

const Shop = () => {
  const navigate = useNavigate();

  const navigateRoute = (event) => {
    const id = Number(event.currentTarget.getAttribute("data-id"));
    const targetAsteroid = asteroids.find((asteroid) => asteroid.id === id);

    navigate(`/shop/asteroid/${targetAsteroid.urlName}`);
  };

  const item = (asteroid) => (
    <div
      onClick={navigateRoute}
      key={asteroid.id}
      className="item-div"
      data-id={asteroid.id}
    >
      <hr />
      <p className="asteroid-name">Name : {asteroid.name}</p>
      <p className="asteroid-price">Price: {asteroid.price}</p>
      <hr />
    </div>
  );

  return (
    <div className="shop">{asteroids.map((asteroid) => item(asteroid))}</div>
  );
};

export default Shop;
