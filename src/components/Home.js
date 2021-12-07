import React from "react";
import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate("/shop");
  };

  return (
    <section className="home">
      <section className="front-section">
        <div className="about-div">
          <h2 className="about-heading">Asteroids</h2>
          <p className="about-text">Best asteroids in town</p>
          <button className="shop-button" onClick={clickHandler}>
            Shop now
          </button>
        </div>
        <div className="rotating-image">
          <p className="rotating-image-text">Asteroid of the week</p>
          <img src="" alt="asteroid" />
        </div>
      </section>
      <section className="boxes-section">
        <div className="box-one">Always in stock</div>
        <div className="box-two">Environment friendly</div>
        <div className="box-three">Free shipping</div>
        <div className="box-four">N/A</div>
      </section>
      <section className="customer-section">
        <div className="review-one">Amazing</div>
        <div className="review-two">Excellent</div>
      </section>
      <div className="shop-button-div">
        <button className="shop-button-two" onClick={clickHandler}>
          Get your favorite asteroid now
        </button>
      </div>
    </section>
  );
};

export default Home;
