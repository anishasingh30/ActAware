import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  const navigate = useNavigate();

  const handleScrollToSection = (e, sectionId) => {
    e.preventDefault();
    navigate("/"); 
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); 
  };

  return (
    <nav className="navbar">
      <div className="logo">ActAware</div>
      <ul className="nav-links">
        <li>
          <a href="/home" onClick={(e) => handleScrollToSection(e, "body-section")}>
            Home
          </a>
        </li>
        <li>
          <a href="/body" onClick={(e) => handleScrollToSection(e, "body-section")}>
            About Us
          </a>
        </li>
        <li>
          <a href="/blogs" onClick={(e) => handleScrollToSection(e, "blogs-section")}>
            Feedback
          </a>
        </li>
        <NavLink to="/signup">
          <button className="signup-btn">Sign Up</button>
        </NavLink>
      </ul>
    </nav>
  );
}

export default Navbar;
