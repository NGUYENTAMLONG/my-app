import React from "react";
import Contact from "./Contact";
import Products from "./Products";
import "./scss/Body.css";
import Skill from "./Skill";
import Rotate from "react-reveal/Rotate";
import Zoom from "react-reveal/Zoom";
import Flip from "react-reveal/Flip";

export default function Body() {
  return (
    <div className="body">
      <section className="about container " id="about">
        <Rotate left>
          <div className="row">
            <Zoom delay={1000}>
              <h1>About Me</h1>
            </Zoom>
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-lg-6 col1 ">
              <div className="avatar">
                <Zoom delay={1000}>
                  <img src="../Images/my_avatar.png" width="70%" />
                </Zoom>
              </div>
              <p>
                <span>HELLO </span>! My name is long. I am currently working for
                FPT Software company as programmer and UIUX designer.
              </p>
              <div className="but"></div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-lg-6 col2">
              <div className="myself">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <Rotate bottom right cascade delay={2000}>
                  <p>
                    I'd love the opportunity to help you and your team solve
                    your most challenging problems.
                  </p>
                </Rotate>

                {/* <img src="../Images/candy.gif" id="candy" width="150px" />
              <img src="../Images/obj.png" id="obj" />
              <div className="effect_2"></div>
              <div className="effect_box"></div> */}
              </div>
              <div className="row img_services">
                <div className="service">
                  <Flip top delay={1000}>
                    <img src="../Images/obj.png" id="obj" />
                    <p>Motion design</p>
                  </Flip>
                </div>
                <div className="service">
                  <Flip top delay={1000}>
                    <img src="../Images/book.png" id="book" />
                    <p>App design</p>
                  </Flip>
                </div>
                <div className="service">
                  <Flip top delay={1000}>
                    <img src="../Images/web.png" id="book" />
                    <p>Web design</p>
                  </Flip>
                </div>
              </div>
            </div>
          </div>
        </Rotate>
      </section>
      <Skill />
      <Products />
      <Contact />
    </div>
  );
}
