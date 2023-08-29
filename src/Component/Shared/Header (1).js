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

  let seviceDropdownImg = document.querySelector('.inner_service_img_pill');
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
                      ? "colorWhite fw-500"
                      : isOurWorkPage
                      ? "colorWhite fw-500"
                      : "colorGrey fw-500"
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
                      : "colorGrey fw-500 service_link"
                  }
                >
                  <Link to="/servicesMain">Services <Icon icon="uis:angle-down" /></Link>
                  <div className="openServiceMenu ">
                    <div className="service_menu">
                      <ul>
                        <li><a href="/websiteDesign">Website / App</a></li>
                        <li><a href="/Video-production-Services">Video Production</a></li>
                        <li><a href="/Digital-Marketing-Services">Digital Marketing</a></li>
                        <li><a href="/Creative-Services">Creative Design</a></li>
                        <li><a href="/Digital-Activation-Services">Digital Activations</a></li>
                        <li><a href="/Photography">Photography</a></li>
                      </ul>
                    </div>
                    <div className="service_img">
                      <div className="service_img_flex">
                        <img className="inner_service_img_pill inner_service_img_pill_big" src="/images/menu/app.jpg" alt=""/>
                        <img className="inner_service_img_pill" src="/images/menu/ar.jpg" alt="" />
                        <img className="inner_service_img_pill" src="/images/menu/print.jpg" alt="" />
                        <img className="inner_service_img_pill" src="/images/menu/digital.jpg" alt="" />
                        <img className="inner_service_img_pill" src="/images/menu/video.jpg" alt="" />
                        <img className="inner_service_img_pill" src="/images/menu/web.jpg" alt="" />
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
