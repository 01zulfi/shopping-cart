import React from "react";
import { useNavigate } from "react-router";
import asteroid from "../icons/asteroid.png";
import inStock from "../icons/in-stock.png";
import eco from "../icons/eco.png";
import shuttle from "../icons/shuttle.png";
import rex from "../icons/rex.png";
import triceratops from "../icons/triceratops.png";
import "../styles/Home.css";

const Home = () => {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate("/shop");
  };

  return (
    <section className="home">
      <section className="front-section">
        <div className="about-div">
          <p className="about-text-one">Shopping for some rocky goodness?</p>
          <p>Well, you've come to the right place</p>
          <button className="shop-button" onClick={clickHandler}>
            Shop now
          </button>
        </div>
        <div className="rotating-image">
          <img src={asteroid} alt="asteroid-icon" />
        </div>
      </section>
      <section className="boxes-section">
        <div className="box-one">
          <img src={inStock} alt="in-stock-icon" />
          <h3>Always in stock</h3>
          <p>
            With over 800, 000 asteroids in space, and more being discovered
            everyday, rest assured that they won't run out anytime soon. Here at
            Asteroid Store, we've handpicked a few for you to shop from.
          </p>
        </div>
        <div className="box-two">
          <img src={eco} alt="eco-icon" />
          <h3>Environment Friendly</h3>
          <p>
            With all production in space, and seemingly no waste products,
            asteroids are eco friendly. Rest assured, that your asteroid will
            not harm the environment of the tiny planet you reside in.
          </p>
        </div>
        <div className="box-three">
          <img src={shuttle} alt="shuttle-icon" />
          <h3>Free Shipping</h3>
          <p>
            All items on our store have no shipping charges. No tax, no customs,
            pay for just the big rock. Rest assured, the asteroid will be
            shipped right to your doorstep. In case of any damages, we provide
            money back guarantee.
          </p>
        </div>
      </section>
      <section className="customer-section">
        <h3>What do the customers say!?</h3>
        <div className="review-one">
          <p>
            They delivered on their promise! They claim they have the best
            asteroids but they really do. I was so surprised on these prices,
            and with no shipping? They really are the best.
          </p>
          <div className="review-author">
            <img src={rex} alt="rex-icon" />
            -T. Rex
          </div>
        </div>
        <div className="review-two">
          <p>
            Blazing upon entry, shiny before my eyes, so beautiful as the world
            would end. A magnet for the eyes, feast for hearts. Pristine, and
            certainly the most magnificent rock I've ever seen.
          </p>
          <div className="review-author">
            <img src={triceratops} alt="triceratops-icon" />
            -Triceratops
          </div>
        </div>
      </section>
      <div className="shop-button-div">
        <h1>What are you waiting for?</h1>
        <button className="shop-button-two" onClick={clickHandler}>
          Get your favorite asteroid now
        </button>
      </div>
    </section>
  );
};

export default Home;
