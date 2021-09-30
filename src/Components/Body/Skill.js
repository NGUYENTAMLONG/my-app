import React from "react";
import "./scss/Skill.css";
import devguy from "../Images/devguy2.gif";
import Bounce from "react-reveal/Bounce";
import Slide from "react-reveal/Slide";
import Zoom from "react-reveal/Zoom";
import Roll from "react-reveal/Roll";
export default function Skill() {
  return (
    <section className="skill container" id="skills">
      <Roll>
        <h1>My Skills</h1>
      </Roll>
      <div className="row">
        <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 col_1">
          <div className="skills">
            <Slide bottom cascade>
              <ul>
                <li>
                  <span className="html5"></span>
                  <em>HTML</em>
                </li>
                <li>
                  <span className="css3"></span>
                  <em>CSS</em>
                </li>
                <li>
                  <span className="js"></span>
                  <em>Javascript</em>
                </li>
                <li>
                  <span className="jquery"></span>
                  <em>jQuery</em>
                </li>
                <li>
                  <span className="uiux"></span>
                  <em>UI/UX</em>
                </li>
                <li>
                  <span className="teamwork"></span>
                  <em>Teamwork</em>
                </li>
              </ul>
            </Slide>
          </div>
        </div>

        <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 col_2">
          <div className="row">
            <Zoom>
              <img src={devguy} />
            </Zoom>
          </div>
        </div>

        <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 col_3">
          <Bounce>
            <div className="numbers">
              <span>Projects</span>
              <p id="num_1">0</p>
            </div>
            <div className="numbers">
              <span>Reviews</span>
              <p id="num_2">0</p>
            </div>
            <div className="numbers">
              <span>Clients</span>
              <p id="num_3">0</p>
            </div>

            <div className="numbers">
              <span>Partners</span>
              <p id="num_4">0</p>
            </div>
          </Bounce>
        </div>
      </div>
    </section>
  );
}
