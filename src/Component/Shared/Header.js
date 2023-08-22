import { Link, useLocation } from "react-router-dom";
import { Icon } from "@iconify/react";
import $ from "jquery";
import Dropdown from "react-bootstrap/Dropdown";
import { useState } from "react";

const Header = (props) => {
  // $("header nav ul li").on("click", function () {
  //   $(this).addClass("active").siblings().removeClass("active");
  // });
  const [showDropdown, setShowDropdown] = useState(false);
  const hoverStart = () => {
    setShowDropdown(true);
  };
  const hoverEnd = () => {
    setShowDropdown(false);
  };

  const location = useLocation();

  const isServicesMainPage = location.pathname === "/servicesMain";
  const isOurWorkPage = location.pathname === "/our-work";

  const pageClassNames = {
    "/servicesMain": "blackBg",
    "/our-work": "blackBg",
    "/websiteDesign": "Website-Design",
    "/Video-production-Services": "Video-production-Services",
    "/Digital-Marketing-Services": "Digital-Marketing-Services",
    "/Creative-Services": "Creative-Services",
    "/Digital-Activation-Services": "Digital-Activation-Services",
    "/Photography": "Photography",
  };

  const currentPage = location.pathname;
  let headerClassName;

  if (pageClassNames.hasOwnProperty(currentPage)) {
    headerClassName = pageClassNames[currentPage];
  }

  return (
    <>
      <div className={headerClassName}>
        <div className="content_container header_content_container position-relative">
          <header>
            <Link to="/">
              {isServicesMainPage ? (
                <img
                  src="/images/icons/rt-footer-logo.svg"
                  alt="RT Logo"
                  className="rt_logo"
                />
              ) : isOurWorkPage ? (
                <img
                  src="/images/icons/rt-footer-logo.svg"
                  alt="RT Logo"
                  className="rt_logo"
                />
              ) : (
                <img
                  src="/images/icons/rt-logo.svg"
                  alt="RT Logo"
                  className="rt_logo"
                />
              )}
            </Link>
            <nav>
              <ul>
                <li
                  className={
                    isServicesMainPage
                      ? "colorWhite fw-400"
                      : isOurWorkPage
                      ? "colorWhite fw-400"
                      : "colorGrey fw-400"
                  }
                >
                  <Link to="/">Home</Link>
                </li>
                <li
                  // onMouseOver={hoverStart}
                  onMouseMove={hoverStart}
                  // onMouseLeave={hoverEnd}
                  className={
                    isServicesMainPage
                      ? "colorWhite fw-400"
                      : isOurWorkPage
                      ? "colorWhite fw-400"
                      : "colorGrey fw-400"
                  }
                >
                  <Link to="/servicesMain">Services</Link>
                  <div className="openServiceMenu ">
                    <div className="row w-100">
                      <div className="col-lg-4">
                        <ul className="dropdown_menu">
                          <li>
                            <a href="/websiteDesign">Website / App</a>
                          </li>
                          <li>
                            <a href="/Video-production-Services">
                              Video Production
                            </a>
                          </li>
                          <li>
                            <a href="/Digital-Marketing-Services">
                              Digital Marketing
                            </a>
                          </li>
                          <li>
                            <a href="/Creative-Services">Creative Design</a>
                          </li>
                          <li>
                            <a href="/Digital-Activation-Services">
                              Digital Activations
                            </a>
                          </li>
                          <li>
                            <a href="/Photography">Photography</a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-8">
                        <div
                          className="d-flex justify-content-end wow fadeInRight"
                          data-wow-delay="300ms"
                          style={{
                            visibility: "visible",
                            animationDelay: "300ms",
                            animationName: "fadeInRight",
                          }}
                        >
                          <div
                            className="image-box  position-relative"
                            style={{ width: "400px" }}
                          >
                            <a href="">
                              <div className="position-relative image-hover-box">
                                <img
                                  className="banner-1"
                                  src="/images/menu/app.jpg"
                                  alt=""
                                />
                              </div>

                              <div
                                className="hover-show-text child-first position-absolute align-items-center bottom-0 left-0 d-flex w-100 px-3 pb-3"
                                style={{ visibility: "visible" }}
                              ></div>
                            </a>
                          </div>

                          <div className="image-box hover-box position-relative">
                            <a href="">
                              <div className="position-relative image-hover-box">
                                <img
                                  className="banner-4"
                                  src="/images/menu/ar.jpg"
                                  alt=""
                                />
                              </div>
                            </a>
                          </div>

                          <div className="image-box hover-box position-relative">
                            <a href="">
                              <div className="position-relative image-hover-box">
                                <img
                                  className="banner-4"
                                  src="/images/menu/print.jpg"
                                  alt=""
                                />
                              </div>
                            </a>
                          </div>

                          <div className="image-box hover-box position-relative">
                            <a href="">
                              <div className="position-relative image-hover-box">
                                <img
                                  className="banner-4"
                                  src="/images/menu/digital.jpg"
                                  alt=""
                                />
                              </div>
                            </a>
                          </div>
                          <div className="image-box hover-box position-relative">
                            <a href="">
                              <div className="position-relative image-hover-box">
                                <img
                                  className="banner-4"
                                  src="/images/menu/video.jpg"
                                  alt=""
                                />
                              </div>
                            </a>
                          </div>
                          <div className="image-box hover-box position-relative">
                            <a href="">
                              <div className="position-relative image-hover-box">
                                <img
                                  className="banner-4"
                                  src="/images/menu/web.jpg"
                                  alt=""
                                />
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li
                  className={
                    isServicesMainPage
                      ? "colorWhite fw-400"
                      : isOurWorkPage
                      ? "colorWhite fw-400"
                      : "colorGrey fw-400"
                  }
                >
                  <Link to="/our-work">Our Work</Link>
                </li>
                <li
                  className={
                    isServicesMainPage
                      ? "colorWhite fw-400"
                      : isOurWorkPage
                      ? "colorWhite fw-400"
                      : "colorGrey fw-400"
                  }
                >
                  <Link to="/clients">Clients</Link>
                </li>
                <li
                  className={
                    isServicesMainPage
                      ? "colorWhite fw-400"
                      : isOurWorkPage
                      ? "colorWhite fw-400"
                      : "colorGrey fw-400"
                  }
                >
                  <Link to="about-us">About Us</Link>
                </li>
                <li className="colorRed fw-400">
                  <Link to="contact-us" className="lets_talk_link">
                    <span>Let’s Talk </span>
                    <Icon icon="clarity:arrow-line" />
                  </Link>
                </li>
              </ul>

              <div onClick={props.openModal} className="hamburger">
                <img src="/images/icons/menu.svg" alt="menu" />
              </div>
            </nav>
          </header>
        </div>
      </div>
      {/* {showDropdown === true ? ( */}
      {/* <div className={showDropdown === true ? "absElement show" : "absElement"}>
        <a href="/websiteDesign" className="dropDownAtag colorBlack fw-400">
          Website/App
        </a>
        <a
          href="/Video-production-Services"
          className="dropDownAtag colorBlack fw-400"
        >
          Video Production
        </a>
        <a
          href="/Digital-Marketing-Services"
          className="dropDownAtag colorBlack fw-400"
        >
          Digital Marketing
        </a>
        <a href="/Creative-Services" className="dropDownAtag colorBlack fw-400">
          Creative Design
        </a>
        <a
          href="/Digital-Activation-Services"
          className="dropDownAtag colorBlack fw-400"
        >
          Digital Activations
        </a>
      </div> */}
    </>
  );
};

export default Header;
