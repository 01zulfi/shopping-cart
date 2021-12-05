import React from "react";
import asteroids from "../asteroids";

const Shop = () => {
  const item = (asteroid) => (
    <div key={asteroid.id} className="item-div" data-id={asteroid.id}>
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
