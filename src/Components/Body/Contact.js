import React from "react";
import "./scss/Contact.css";
import Flip from "react-reveal/Flip";
import Zoom from "react-reveal/Zoom";
import Slide from "react-reveal/Slide";

export default function Contact() {
  return (
    <section className="contact container" id="contact">
      {/* <img src="Images/group.gif" id="bg_contact" /> */}
      <div className="contact__title">
        <Zoom>
          <h1>Contact Me</h1>
        </Zoom>
        <Flip bottom cascade>
          <p>
            I’m always interested in hearing about new projects and
            opportunities.
            <span>
              You can tell me about the problems you are trying to solve.
            </span>
            I'd love to listen and see if there's anything I can do to help you.
          </p>
        </Flip>
      </div>
      <Slide bottom cascade>
        <form action="#">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea type="text" cols="4" placeholder="Messenger" />
          <input type="submit" />
        </form>
      </Slide>
    </section>
  );
}
