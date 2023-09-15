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
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);

  const hoverStart = () => {
    setShowDropdown(true);
  };
  const hoverEnd = () => {
    setShowDropdown(false);
  };

  const location = useLocation();

  const isServicesMainPage = location.pathname === "/servicesMain";
  const isOurWorkPage = location.pathname === "/our-work";
  const isAllProjects = location.pathname === "/our-work/all-projects";
  const isDigitalMarketing =
    location.pathname === "/our-work/digital-marketing";
  const isDigitalActivation =
    location.pathname === "/our-work/digital-activation";
  const isCreativeDesign = location.pathname === "/our-work/creative-design";
  const isPhotography = location.pathname === "/our-work/photography";
  const isWebsiteApp = location.pathname === "/our-work/website-app";
  const isVideoProduction = location.pathname === "/our-work/video-production";

  const pageClassNames = {
    "/servicesMain": "blackBg",
    "/our-work": "blackBg",
    "/our-work/all-projects": "blackBg",
    "/our-work/digital-marketing": "blackBg",
    "/our-work/digital-activation": "blackBg",
    "/our-work/creative-design": "blackBg",
    "/our-work/photography": "blackBg",
    "/our-work/website-app": "blackBg",
    "/our-work/video-production": "blackBg",
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

  let seviceDropdownImg = document.querySelector(".inner_service_img_pill");
  console.log(seviceDropdownImg);
  // seviceDropdownImg.addEventListener('hover', function(){
  //   seviceDropdownImg.classList.add('.inner_service_img_pill_big')
  // })

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
              ) : isAllProjects ? (
                <img
                  src="/images/icons/rt-footer-logo.svg"
                  alt="RT Logo"
                  className="rt_logo"
                />
              ) : isDigitalMarketing ? (
                <img
                  src="/images/icons/rt-footer-logo.svg"
                  alt="RT Logo"
                  className="rt_logo"
                />
              ) : isDigitalActivation ? (
                <img
                  src="/images/icons/rt-footer-logo.svg"
                  alt="RT Logo"
                  className="rt_logo"
                />
              ) : isCreativeDesign ? (
                <img
                  src="/images/icons/rt-footer-logo.svg"
                  alt="RT Logo"
                  className="rt_logo"
                />
              ) : isPhotography ? (
                <img
                  src="/images/icons/rt-footer-logo.svg"
                  alt="RT Logo"
                  className="rt_logo"
                />
              ) : isWebsiteApp ? (
                <img
                  src="/images/icons/rt-footer-logo.svg"
                  alt="RT Logo"
                  className="rt_logo"
                />
              ) : isVideoProduction ? (
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
                      : isAllProjects
                      ? "colorWhite fw-400"
                      : isDigitalMarketing
                      ? "colorWhite fw-400"
                      : isDigitalActivation
                      ? "colorWhite fw-400"
                      : isCreativeDesign
                      ? "colorWhite fw-400"
                      : isPhotography
                      ? "colorWhite fw-400"
                      : isWebsiteApp
                      ? "colorWhite fw-400"
                      : isVideoProduction
                      ? "colorWhite fw-400"
                      : "colorGrey fw-500 service_link"
                  }
                ></li>
                <li
                  // onMouseOver={hoverStart}
                  onMouseMove={hoverStart}
                  // onMouseLeave={hoverEnd}
                  className={
                    isServicesMainPage
                      ? "colorWhite fw-500 service_link"
                      : isOurWorkPage
                      ? "colorWhite fw-500 service_link"
                      : isAllProjects
                      ? "colorWhite fw-500 service_link"
                      : isDigitalMarketing
                      ? "colorWhite fw-500 service_link"
                      : isDigitalActivation
                      ? "colorWhite fw-500 service_link"
                      : isCreativeDesign
                      ? "colorWhite fw-500 service_link"
                      : isPhotography
                      ? "colorWhite fw-500 service_link"
                      : isWebsiteApp
                      ? "colorWhite fw-500 service_link"
                      : isVideoProduction
                      ? "colorWhite fw-500 service_link"
                      : "colorGrey fw-500 service_link"
                  }
                >
                  <Link to="/servicesMain">
                    Services <Icon icon="uis:angle-down" />
                  </Link>
                  <div className="openServiceMenu ">
                    <div className="service_menu ">
                      <ul>
                        <li className="fw-bold">
                          <a href="/websiteDesign">Website / App</a>
                        </li>
                        <li className="fw-800">
                          <a href="/Video-production-Services">
                            Video Production
                          </a>
                        </li>
                        <li className="fw-800">
                          <a href="/Digital-Marketing-Services">
                            Digital Marketing
                          </a>
                        </li>
                        <li className="fw-800">
                          <a href="/Creative-Services">Creative Design</a>
                        </li>
                        <li className="fw-800">
                          <a href="/Digital-Activation-Services">
                            Digital Activations
                          </a>
                        </li>
                        <li className="fw-800">
                          <a href="/Photography">Photography</a>
                        </li>
                      </ul>
                    </div>
                    <div className="service_img">
                      <div className="service_img_flex">
                        <img
                          className="inner_service_img_pill inner_service_img_pill_big"
                          src="/images/menu/ui.jpg"
                          alt=""
                        />
                        <img
                          className="inner_service_img_pill"
                          src="/images/menu/ar.jpg"
                          alt=""
                        />
                        <img
                          className="inner_service_img_pill"
                          src="/images/menu/brand.png"
                          alt=""
                        />
                        <img
                          className="inner_service_img_pill"
                          src="/images/menu/digital.jpg"
                          alt=""
                        />
                        <img
                          className="inner_service_img_pill"
                          src="/images/menu/video.jpg"
                          alt=""
                        />
                        <img
                          className="inner_service_img_pill"
                          src="/images/menu/web.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </li>
                <li
                  className={
                    isServicesMainPage
                      ? "colorWhite fw-500 service_link"
                      : isOurWorkPage
                      ? "colorWhite fw-500 service_link"
                      : isAllProjects
                      ? "colorWhite fw-500 service_link"
                      : isDigitalMarketing
                      ? "colorWhite fw-500 service_link"
                      : isDigitalActivation
                      ? "colorWhite fw-500 service_link"
                      : isCreativeDesign
                      ? "colorWhite fw-500 service_link"
                      : isPhotography
                      ? "colorWhite fw-500 service_link"
                      : isWebsiteApp
                      ? "colorWhite fw-500 service_link"
                      : isVideoProduction
                      ? "colorWhite fw-500 service_link"
                      : "colorGrey fw-500 service_link"
                  }
                >
                  <Link to="/our-work">Our Work</Link>
                </li>
                <li
                  className={
                    isServicesMainPage
                      ? "colorWhite fw-500 service_link"
                      : isOurWorkPage
                      ? "colorWhite fw-500 service_link"
                      : isAllProjects
                      ? "colorWhite fw-500 service_link"
                      : isDigitalMarketing
                      ? "colorWhite fw-500 service_link"
                      : isDigitalActivation
                      ? "colorWhite fw-500 service_link"
                      : isCreativeDesign
                      ? "colorWhite fw-500 service_link"
                      : isPhotography
                      ? "colorWhite fw-500 service_link"
                      : isWebsiteApp
                      ? "colorWhite fw-500 service_link"
                      : isVideoProduction
                      ? "colorWhite fw-500 service_link"
                      : "colorGrey fw-500 service_link"
                  }
                >
                  <Link to="/clients">Clients</Link>
                </li>
                <li
                  className={
                    isServicesMainPage
                      ? "colorWhite fw-500 service_link"
                      : isOurWorkPage
                      ? "colorWhite fw-500 service_link"
                      : isAllProjects
                      ? "colorWhite fw-500 service_link"
                      : isDigitalMarketing
                      ? "colorWhite fw-500 service_link"
                      : isDigitalActivation
                      ? "colorWhite fw-500 service_link"
                      : isCreativeDesign
                      ? "colorWhite fw-500 service_link"
                      : isPhotography
                      ? "colorWhite fw-500 service_link"
                      : isWebsiteApp
                      ? "colorWhite fw-500 service_link"
                      : isVideoProduction
                      ? "colorWhite fw-500 service_link"
                      : "colorGrey fw-500 service_link"
                  }
                >
                  <Link to="about-us">About Us </Link>
                </li>
                <li className="colorRed fw-400">
                  <Link to="contact-us" className="lets_talk_link">
                    <span>Let’s Talk </span>
                    <Icon icon="majesticons:arrow-right" />
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
