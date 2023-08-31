import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import WOW from "wowjs";
import { Icon } from "@iconify/react";

const LorealMatrix = (props) => {
  useEffect(() => {
    const wow = new WOW.WOW({
      live: false,
    });
    wow.init();
  }, []);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <section className="ourWork">
        <div className="content_container">
          <h1 className="projectHeading colorBlack fw-800 text-center wow animate__animated animate__fadeIn">
            L'Oréal Matrix
          </h1>
          <img
            src="/images/our-work/digital_activation/loreal/AYM1.svg"
            alt="icici"
            className="img-fluid w-100 wow animate__animated animate__fadeIn"
          />
          <div className="gridSystem">
            <div className="gridSystemInner">
              <h2 className="colorRed fw-800 wow animate__animated animate__fadeIn">
                Brief
              </h2>
              <p className="colorGrey fw-400 wow animate__animated animate__fadeInLeft">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
              <div className="row m-0 briefDetails wow animate__animated animate__fadeIn">
                <div className="col-sm-6 p-0 briefDetailsInner wow animate__animated animate__fadeInLeft">
                  <h4 className="colorBlack fw-800">Client</h4>
                  <span className="colorGrey fw-400">Loreal Matrix</span>
                </div>
                <div className="col-sm-6 p-0 briefDetailsInner wow animate__animated animate__fadeInLeft">
                  <h4 className="colorBlack fw-800">Industry</h4>
                  <span className="colorGrey fw-400">Fashion</span>
                </div>
                <div className="col-sm-6 p-0 briefDetailsInner wow animate__animated animate__fadeInRight">
                  <h4 className="colorBlack fw-800">Work</h4>
                  <span className="colorGrey fw-400">
                    AR Filter Design & Development
                  </span>
                </div>
              </div>

              {/* <Link
                to="/our-work"
                className="unsetAll"
                onClick={() => window.scrollTo(0, 0)}
              >
                <span className="colorRed fw-400 commonViewAll">
                  Check Posts &nbsp;
                  <img src="/images/icons/toparrow.svg" alt="toparrow" />
                </span>
              </Link> */}
              <Link
                to="/our-work"
                className="unsetAll"
                onClick={() => window.scrollTo(0, 0)}
              >
                <span className="commonViewAll">Check Posts</span>
                <Icon icon="clarity:arrow-line" />
              </Link>
            </div>
            <div className="gridSystemInner">
              <div className="d-flex align-items-center customGap">
                {/* <div> */}
                <img
                  src="/images/our-work/digital_activation/loreal/mobi1.svg"
                  alt="mcdowell"
                  className="img-fluid w-100 wow animate__animated animate__fadeInRight"
                />
                {/* </div> */}
                {/* <div> */}
                <img
                  src="/images/our-work/digital_activation/loreal/mobi2.svg"
                  alt="mcdowell"
                  className="img-fluid w-100 m-0 wow animate__animated animate__fadeInRight"
                />
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="serviceImageSection"
        onMouseEnter={props.mouseEnterOnBlack}
        onMouseLeave={props.mouseLeaveOnBlack}
      >
        <div className="content_container">
          <img
            src="/images/our-work/digital_activation/loreal/Rectangle100.svg"
            alt="Loreal"
            className="img-fluid w-100 wow animate__animated animate__fadeIn"
          />
        </div>
      </section>

      <section className="ourWorkSlider wow animate__animated animate__slideInLeft">
        <div className="content_container">
          <h2 className="sectionHead colorBlack fw-800">
            <img src="/images/icons/line.svg" alt="line" />
            More Works
          </h2>
          <Slider {...settings}>
            <div>
              <div className="sliderInner">
                <div className="imgHoverEffect position-relative">
                  <a href="/amazon-sambhav" className="colorWhite fw-800">
                    View Projects &nbsp;
                    <img
                      src="/images/icons/toparrowWhite.svg"
                      alt="toparrow"
                      className="img-fluid"
                    />
                  </a>
                  <img
                    src="/images/our-work/digital_activation/alkemar/Maskgroup.svg"
                    alt="work"
                  />
                </div>
                <h2 className="colorBlack fw-800">Amazon Sambhav</h2>
                <span className="colorGrey fw-400">
                  Ar Filter Design & Development
                </span>
              </div>
            </div>
            <div>
              <div className="sliderInner">
                <div className="imgHoverEffect position-relative">
                  <a href="/alkem-ar-filters" className="colorWhite fw-800">
                    View Projects &nbsp;
                    <img
                      src="/images/icons/toparrowWhite.svg"
                      alt="toparrow"
                      className="img-fluid"
                    />
                  </a>
                  <img
                    src="/images/our-work/digital_activation/alkemar/Maskgroup2.svg"
                    alt="work"
                  />
                </div>
                <h2 className="colorBlack fw-800">Ar Filers</h2>
                <span className="colorGrey fw-400">
                  Ar Filter Design & Development
                </span>
              </div>
            </div>
            <div>
              <div className="sliderInner">
                <div className="imgHoverEffect position-relative">
                  <a href="/mcdowell" className="colorWhite fw-800">
                    View Projects &nbsp;
                    <img
                      src="/images/icons/toparrowWhite.svg"
                      alt="toparrow"
                      className="img-fluid"
                    />
                  </a>
                  <img src="/images/our-work/mcdowell.svg" alt="work" />
                </div>
                <h2 className="colorBlack fw-800">McDowell's No.1</h2>
                <span className="colorGrey fw-400">
                  Ar Filter Design & Development
                </span>
              </div>
            </div>
            <div>
              <div className="sliderInner">
                <div className="imgHoverEffect position-relative">
                  <a href="/loreal-matrix" className="colorWhite fw-800">
                    View Projects &nbsp;
                    <img
                      src="/images/icons/toparrowWhite.svg"
                      alt="toparrow"
                      className="img-fluid"
                    />
                  </a>
                  <img
                    src="/images/our-work/digital_activation/loreal/AYM1.svg"
                    alt="work"
                  />
                </div>
                <h2 className="colorBlack fw-800">L'Oréal Matrix</h2>
                <span className="colorGrey fw-400">Digital Activations</span>
              </div>
            </div>
          </Slider>
          <Link
            to="/our-work"
            className="unsetAll"
            onClick={() => window.scrollTo(0, 0)}
          >
            <span className="commonViewAll">View Our Projects</span>
            <Icon icon="clarity:arrow-line" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default LorealMatrix;
