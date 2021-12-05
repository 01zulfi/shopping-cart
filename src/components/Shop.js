import React from "react";

const Shop = () => {
  const item = (asteroid) => (
    <div key={asteroid.id} className="item-div" data-id={asteroid.id}></div>
  );

  return <div className="shop">{item({ id: 1 })}</div>;
};

export default Shop;
