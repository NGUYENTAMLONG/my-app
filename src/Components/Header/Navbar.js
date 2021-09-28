import React from "react";
import "./scss/Navbar.css";
import Bounce from "react-reveal/Bounce";
import Fade from "react-reveal/Fade";

export default function Navbar() {
  const menu = (
    <>
      <li className="nav_item">
        <a href="#home">Home</a>
      </li>
      <li className="nav_item">
        <a href="#about">About</a>
      </li>
      <li className="nav_item">
        <a href="#skills" id="count">
          Skill
        </a>
      </li>
      <li className="nav_item">
        <a href="#products">Products</a>
      </li>
      <li>
        <a className="nav_item" href="#contact">
          Contact
        </a>
      </li>
    </>
  );
  return (
    <div className="navbar container">
      {/* <div className="row"> */}
      <a href="#home">
        <Bounce>
          <h1 className="logo">
            NTL<span>/</span>
          </h1>
        </Bounce>
      </a>
      <ul className="menu menu_main" style={{ display: "none" }}>
        <li className="menu_item">
          <a href="#home" className="nav_item active">
            Home
          </a>
        </li>
        <li className="menu_item">
          <a href="#about" className="nav_item">
            About
          </a>
        </li>
        <li className="menu_item">
          <a href="#skills" className="nav_item">
            Skills
          </a>
        </li>
        <li className="menu_item">
          <a href="#products" className="nav_item">
            Products
          </a>
        </li>
        <li className="menu_item">
          <a href="#contact" className="nav_item">
            Contact
          </a>
        </li>
      </ul>
      <nav>
        <Fade right cascade>
          <ul className="menu">{menu}</ul>
        </Fade>
      </nav>
      <i className="fas fa-bars fa-2x"></i>
      <nav className="bar_rps">
        <i className="fas fa-times-circle fa-2x"></i>
        <ul>{menu}</ul>
      </nav>
    </div>
    // </div>
  );
}
