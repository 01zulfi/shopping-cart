import React from "react";
import { useParams } from "react-router";
import asteroids from "../asteroids";

const ItemPage = () => {
  const params = useParams();
  const targetAsteroid = asteroids.find(
    (asteroid) => asteroid.urlName === params.name
  );

  if (!targetAsteroid) return null;

  return (
    <section className="item-page-section">
      <h1 className="asteroid-name">{targetAsteroid.name}</h1>
      <p className="asteroid-price"></p>
    </section>
  );
};

export default ItemPage;
