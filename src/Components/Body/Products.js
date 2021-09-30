import React from "react";
import Slider from "react-slick";
import "./scss/Products.css";
import p1 from "../Images/p1.gif";
import p2 from "../Images/p2.png";
import p3 from "../Images/p3.png";
import p4 from "../Images/p3.gif";
import p5 from "../Images/p5.png";
import p6 from "../Images/p6.png";
import Tada from "react-reveal/Tada";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
export default function Products() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
    ],
  };

  return (
    <section
      className="myProducts container "
      id="products"
      // style={{ width: "100%", height: "100vh" }}
    >
      <div className="title text-center mb-4 mt-4  ">
        <Tada>
          <h1>My Projects</h1>
        </Tada>
        <Zoom top cascade>
          <p>Here are some interesting points in my projects...</p>
        </Zoom>
      </div>
      <div className="slider">
        <Fade bottom cascade>
          <Slider {...settings}>
            <a href="#">
              <img src={p1} />
            </a>
            <a href="#">
              <img src={p2} />
            </a>
            <a href="#">
              <img src={p3} />
            </a>
            <a href="#">
              <img src={p4} />
            </a>

            <a href="#">
              <img src={p5} />
            </a>
            <a href="#">
              <img src={p6} />
            </a>
          </Slider>
        </Fade>
      </div>
    </section>
  );
}
