import React from 'react';
import "../styles/AboutUs.css";

function About() {
  return (
    <div className="body-container">
      <div className="about-text">
        <h2>About the Global Goals</h2>
        <p>
          The <strong>17 Sustainable Development Goals (SDGs)</strong>, also known as the <strong>Global Goals</strong>, were adopted by the United Nations in 2015 as a universal call to action to <strong>end poverty</strong>, protect the planet, and ensure peace and prosperity for all by 2030.
        </p>
        <p>
          These goals address the world's most pressing challenges, including climate change, inequality, hunger, education, and economic growth.  
          <strong> By working together, we can create a better future for everyone.</strong>
        </p>
      </div>

      {/* Right Side - Image */}
      <div className="about-image">
        <img src="https://oneoceanhub.org/wp-content/uploads/2023/01/SDG-wheel.png" alt="Global Goals" />
      </div>
    </div>
  );
}

export default About;
