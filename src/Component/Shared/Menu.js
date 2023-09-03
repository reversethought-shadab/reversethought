import React, { useState } from "react";
import { Link } from "react-router-dom";

const Menu = (props) => {
  return (
    <>
      <div className="menu">
        <div className="menu_header header_content_container">
          <div className="menu_logo">
            <img
              src="/images/icons/rt-logo.svg"
              alt="RT Logo"
              className="rt_logo"
            />
          </div>
          <div onClick={props.openModal} className="closeModal">
            <img src="/images/icons/close.svg" alt="close" />
          </div>
        </div>

        <div className="menuMain">
          <div
            className="menuMainL position-relative"
            onMouseEnter={props.mouseEnterOnRed}
            onMouseLeave={props.mouseLeaveOnRed}
          >
            <div className="d-flex customGap">
              <ul className="mainPages">
                <li className="colorWhite fw-800">
                  <a href="/" onClick={props.closeModal}>
                    Home &nbsp;
                    <img
                      src="/images/icons/topArrowWhite.svg"
                      alt="topArrowWhite"
                    />
                  </a>
                </li>
                {/* <li className="colorWhite fw-800">
                  <a href="/servicesMain" onClick={props.closeModal}>
                    Services &nbsp;
                    <img
                      src="/images/icons/topArrowWhite.svg"
                      alt="topArrowWhite"
                    />
                  </a>
                </li> */}
                <li className="colorWhite fw-800">
                  <a href="/our-work" onClick={props.closeModal}>
                    Our Work &nbsp;
                    <img
                      src="/images/icons/topArrowWhite.svg"
                      alt="topArrowWhite"
                    />
                  </a>
                </li>
                <li className="colorWhite fw-800">
                  <a href="/clients" onClick={props.closeModal}>
                    Clients &nbsp;
                    <img
                      src="/images/icons/topArrowWhite.svg"
                      alt="topArrowWhite"
                    />
                  </a>
                </li>
                <li className="colorWhite fw-800">
                  <a href="/about-us" onClick={props.closeModal}>
                    About Us &nbsp;
                    <img
                      src="/images/icons/topArrowWhite.svg"
                      alt="topArrowWhite"
                    />
                  </a>
                </li>
              </ul>
              <ul>
                <li className="titleWithUnderline colorWhite fw-800">
                  Services
                </li>
                <li className="colorWhite fw-300">
                  <a href="/websiteDesign" onClick={props.closeModal}>
                    Web/App
                  </a>
                </li>
                <li className="colorWhite fw-300">
                  <a
                    href="/Video-production-Services"
                    onClick={props.closeModal}
                  >
                    Video Production
                  </a>
                </li>
                <li className="colorWhite fw-300">
                  <a
                    href="/Digital-Marketing-Services"
                    onClick={props.closeModal}
                  >
                    Digital Marketing
                  </a>
                </li>
                <li className="colorWhite fw-300">
                  <a href="/Creative-Services" onClick={props.closeModal}>
                    Creative Design
                  </a>
                </li>
                <li className="colorWhite text-white fw-300">
                  <a
                    href="/Digital-Activation-Services"
                    onClick={props.closeModal}
                  >
                    Digital Activations
                  </a>
                </li>
                <li className="colorWhite text-wite fw-300">
                  <a href="/Photography" onClick={props.closeModal}>
                    PhotoGraphy
                  </a>
                </li>
              </ul>
              <ul>
                <li className="titleWithUnderline colorWhite fw-800">
                  Quick Links
                </li>
                <li className="colorWhite fw-300">
                  <a href="/careers" onClick={props.closeModal}>
                    Careers
                  </a>
                </li>
                <li className="colorWhite fw-300">Blogs</li>
                <li className="colorWhite fw-300">In news</li>
                <li className="colorWhite fw-300">
                  <a href="/contact-us" onClick={props.closeModal}>
                    Contact Us
                  </a>
                </li>
              </ul>
              <ul>
                <li className="titleWithUnderline colorWhite fw-800">
                  Connect
                </li>
                <li className="colorWhite fw-300">
                  <Link
                    to="https://www.linkedin.com/company/reverse-thought"
                    target="_blank"
                  >
                    Linkedin
                  </Link>
                </li>
                <li className="colorWhite fw-300">
                  <Link
                    to="https://www.instagram.com/reversethought/"
                    target="_blank"
                  >
                    Instagram
                  </Link>
                </li>
                <li className="colorWhite fw-300">
                  <Link
                    to="http://www.facebook.com/pages/REVERSE-THOUGHT-CREATIVES/260606762932"
                    target="_blank"
                  >
                    Facebook
                  </Link>
                </li>
                <li className="colorWhite fw-300">
                  <a href="/" target="_blank">
                    Dribble
                  </a>
                </li>
                <li className="colorWhite fw-300">
                  <a href="https://twitter.com/rthoughtindia" target="_blank">
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="menuMainR position-relative"
            onMouseEnter={props.mouseEnterOnBlack}
            onMouseLeave={props.mouseLeaveOnBlack}
          >
            <img src="/images/icons/wave-shape.svg" alt="wave-shape" />
            <p className="colorWhite fw-800">
              Starting a new project <br />
              or want to collaborate <br />
              with us? <br />
              <span className="fw-800"> Let’s Talk?</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
