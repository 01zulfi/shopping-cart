import React from "react";

const ItemPage = ({ name, price }) => (
  <section className="item-page-section">
    <h1 className="asteroid-name">{name}</h1>
    <p className="asteroid-price">Price: {price}</p>
  </section>
);

export default ItemPage;
