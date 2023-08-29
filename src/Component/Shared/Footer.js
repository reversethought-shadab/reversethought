import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const Footer = (props) => {
  return (
    <>
      <footer
      // onMouseEnter={props.mouseEnterOnBlack}
      // onMouseLeave={props.mouseLeaveOnBlack}
      >
        <div
          className="parentFooterEmailSection"
          onMouseEnter={(e) => {
            e.stopPropagation();
            props.mouseEnterOnFooter();
          }}
          onMouseLeave={(e) => {
            e.stopPropagation();
            props.mouseLeaveOnFooter();
          }}
        >
          <div className="content_container footerEmailSection">
            <div className="footerHead">
              <h2 className="colorlightWhite fw-800">
                <span>Starting a new project or</span>
              </h2>
              <h2 className="colorlightWhite fw-800 footer_lets_talk">
                <span>want to collaborate with us?</span>{" "}
                <a href="/contact-us" className="unsetAll">
                  <span className="colorRed">Let’s Talk</span>
                  <Icon icon="uim:angle-right" />
                </a>
              </h2>

              <h2 className="colorlightWhite fw-800 footer_mail_heading">
                Or mail us at <br />
                <a
                  href="mailto:contact@reversethought.com"
                  className="unsetAll"
                >
                  contact@reversethought.com
                </a>
              </h2>
            </div>
          </div>
        </div>

        <div
          className="parentMainFooterContent"
          onMouseEnter={props.mouseEnterOnBlack}
          onMouseLeave={props.mouseLeaveOnBlack}
        >
          <div className="content_container">
            <div className="row m-0 footerDetails">
              <div className="col-5 col-sm-4 col-md-3 p-0">
                <img
                  src="/images/icons/rt-footer-logo.svg"
                  alt="rt-footer-logo"
                />
                <h4 className="colorWhite fw-800">
                  We’re your Design <br /> Multiverse
                </h4>
              </div>
              <div className="col-12 col-sm-12 col-md-6 p-0 footer_link_area">
                <div className="footer_nav_links">
                  <ul>
                    <li className="title colorWhite fw-800">Company</li>
                    <a
                      href="/"
                      className="unsetAll"
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      Home
                    </a>
                    <a
                      href="/servicesMain"
                      className="unsetAll"
                      // onClick={() => window.scrollTo(0, 0)}
                    >
                      Services
                    </a>
                    <a
                      href="/our-work"
                      className="unsetAll"
                      // onClick={() => window.scrollTo(0, 0)}
                    >
                      Our works
                    </a>
                    <a
                      href="/clients"
                      className="unsetAll"
                      // onClick={() => window.scrollTo(0, 0)}
                    >
                      Clients
                    </a>
                    <a
                      href="/about-us"
                      className="unsetAll"
                      // onClick={() => window.scrollTo(0, 0)}
                    >
                      About Us
                    </a>
                  </ul>
                </div>
                <div className="footer_nav_links">
                  <ul>
                    <li className="title colorWhite fw-800">Services</li>
                    <a
                      href="/websiteDesign"
                      className="unsetAll"
                      // onClick={() => window.scrollTo(0, 0)}
                    >
                      Web/App
                    </a>
                    <a
                      href="/Video-production-Services"
                      className="unsetAll"
                      // onClick={() => window.scrollTo(0, 0)}
                    >
                      Video Production
                    </a>
                    <a
                      href="/Digital-Marketing-Services"
                      className="unsetAll"
                      // onClick={() => window.scrollTo(0, 0)}
                    >
                      Digital Marketing
                    </a>
                    <a
                      href="/Creative-Services"
                      className="unsetAll"
                      // onClick={() => window.scrollTo(0, 0)}
                    >
                      Creative Design
                    </a>
                    <a
                      href="/Digital-Activation-Services"
                      className="unsetAll"
                      // onClick={() => window.scrollTo(0, 0)}
                    >
                      Digital Activations
                    </a>
                  </ul>
                </div>
                <div className="footer_nav_links">
                  <ul>
                    <li className="title colorWhite fw-800">Quick Links</li>
                    <a
                      href="/careers"
                      className="unsetAll"
                      // onClick={() => window.scrollTo(0, 0)}
                    >
                      Blogs
                    </a>
                    <a
                      href="/careers"
                      className="unsetAll"
                      // onClick={() => window.scrollTo(0, 0)}
                    >
                      News
                    </a>
                    <a
                      href="/careers"
                      className="unsetAll"
                      // onClick={() => window.scrollTo(0, 0)}
                    >
                      Careers
                    </a>

                    <a
                      href="/contact-us"
                      className="unsetAll"
                      // onClick={() => window.scrollTo(0, 0)}
                    >
                      Contact Us
                    </a>
                  </ul>
                </div>
                <div className="footer_nav_links">
                  <ul>
                    <li className="title colorWhite fw-800">Connect</li>
                    <a
                      href="https://www.instagram.com/reversethought/"
                      target="_blank"
                      className="unsetAll"
                    >
                      Instagram
                    </a>
                    <a
                      href="https://twitter.com/rthoughtindia"
                      className="unsetAll"
                      target="_blank"
                    >
                      Dribbble
                    </a>
                    <a
                      href="https://twitter.com/rthoughtindia"
                      className="unsetAll"
                      target="_blank"
                    >
                      Behance
                    </a>
                    <a
                      href="https://twitter.com/rthoughtindia"
                      className="unsetAll"
                      target="_blank"
                    >
                      Twitter
                    </a>
                  </ul>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-3 p-0 footerDetails4">
                <p className="colorWhite fw-300">
                  Sign up for update, insights, case studies and much more
                </p>
                <p className="colorWhite fw-300">No promotions and spamming</p>
                <form>
                  <input
                    type="text"
                    placeholder="Your Email"
                    className="colorWhite fw-300 w-100"
                    required
                  />
                  <br />
                  <button type="submit" className="unsetAll">
                    <span className="colorRed fw-400 commonViewAll">
                      Get in touch
                    </span>
                    <Icon icon="clarity:arrow-line" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div
          className="parentCopyRightarea"
          onMouseEnter={props.mouseEnterOnBlack}
          onMouseLeave={props.mouseLeaveOnBlack}
        >
          <div className="content_container">
            <div className="footerEnd">
              <p className="colorWhite fw-200">
                © Copyright 2023 &nbsp;&nbsp;| &nbsp; &nbsp; Reverse Thought
                Creative Studio Pvt. Ltd. &nbsp;&nbsp; | &nbsp;&nbsp; All Rights
                Reserved.
              </p>
              <ul>
                <li>
                  {" "}
                  <a
                    className=" colorWhite fw-200 text-decoration-none "
                    href="/faq"
                  >
                    FAQs{" "}
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a
                    className=" colorWhite fw-200 text-decoration-none "
                    href="/privacy-policy"
                  >
                    Privacy Policy{" "}
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a
                    className=" colorWhite fw-200 text-decoration-none "
                    href="/terms-of-use"
                  >
                    Terms of Use{" "}
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a
                    className=" colorWhite fw-200 text-decoration-none "
                    href="/sitemap"
                  >
                    Sitemap{" "}
                  </a>{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* </div> */}
      </footer>
    </>
  );
};

export default Footer;
