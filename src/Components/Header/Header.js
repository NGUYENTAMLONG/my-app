import React, { Component } from "react";
import Navbar from "./Navbar";
import "./scss/Header.css";
import camp from "../Images/camp.png";
import fire from "../Images/fire.gif";
import man2 from "../Images/man2.gif";
import dog from "../Images/dog.gif";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import Typical from "react-typical";
export class Header extends Component {
  render() {
    return (
      <section className="header" id="home">
        <Navbar />

        <div className="test container pl-4">
          <Zoom>
            <h1>
              {/* Hello, I’m Long Nguyen <br /> I’m working as Developer <br /> and
              UX/UI Designers. */}
              Hello, I’m Long Nguyen <br /> I’m working as{" "}
              <span className="typical">
                <Typical
                  steps={["Developer", 2000, "and UX/UI Designers.", 1000]}
                  loop={Infinity}
                  wrapper="p"
                />
              </span>
            </h1>
          </Zoom>
          <Fade bottom>
            <p>I will help you build a website, app, or 2D motion.</p>
          </Fade>
        </div>

        <canvas id="pixie"></canvas>
        <div className="intro">
          <div className="effect"></div>
          <img src={fire} alt="" className="fire" />
          <img src={camp} alt="" className="camp" />
          <img src={man2} alt="" className="man" />
          <img src={dog} alt="" className="dog" />
        </div>
        <Flip>
          <div className="c">©tamlong1604</div>
        </Flip>
        <div className="watch_me">
          <p>Find me</p>
          <Zoom bottom cascade>
            <ul className="socials">
              <li className="socials_item">
                <a href="#">
                  <i className="fab fa-dribbble"></i>
                </a>
              </li>
              <li className="socials_item">
                <a href="#">
                  <i className="fab fa-behance"></i>
                </a>
              </li>
              <li className="socials_item">
                <a href="#">
                  <i className="fab fa-facebook"></i>
                </a>
              </li>
              <li className="socials_item">
                <a href="#">
                  <i className="fab fa-facebook-messenger"></i>
                </a>
              </li>
              <li className="socials_item">
                <a href="#">
                  <i className="fab fa-skype"></i>
                </a>
              </li>
              <li className="socials_item">
                <a href="#">
                  <i className="fab fa-telegram"></i>
                </a>
              </li>
              <li className="socials_item">
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </Zoom>
        </div>
      </section>
    );
  }
}

export default Header;
