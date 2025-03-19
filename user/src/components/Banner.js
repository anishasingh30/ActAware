import React from "react";
import { NavLink } from "react-router-dom";
import '../styles/Banner.css';

function Banner() {
  return (
    <div className="banner">
      <div className="banner-content">
        <h1>Learn About the Global Goals</h1>
        <p>
          World leaders agreed on <strong>17 goals</strong> for a better world by 2030. These goals 
          aim to <strong>end poverty</strong>, <strong>fight inequality</strong>, and <strong>tackle climate change</strong>.
          Join us in making a difference!
        </p>
        <NavLink to="/signup">
          <button className="donate-btn">Donate Now</button>
        </NavLink>
      </div>
      <div className="banner-image">
        <img src="https://oneoceanhub.org/wp-content/uploads/2023/01/SDG-wheel.png" alt="Global Goals" />
      </div>
    </div>
  );
}

export default Banner;
