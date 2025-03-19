
import React from "react";
import { Link } from "react-router-dom";
import "../styles/SignLangHero.css";

const SignLangHero = () => {
  return (
    <section className="signlang-hero">
      <div className="hero-overlay"></div>
      
      <div className="hero-content">
        <h1>Powerful sign language learning, without the chaos</h1>
        <p>
          Accelerate your sign language journey with interactive lessons,
          AI-powered practice tools, and community support—all in one place.
        </p>
        <a
          href="http://localhost:3007"
          target="_blank"
          rel="noopener noreferrer"
          className="hero-cta"
        >
          Let's Start 
        </a>
      </div>
    </section>
  );
};

export default SignLangHero;
