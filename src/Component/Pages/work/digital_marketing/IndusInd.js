import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import WOW from "wowjs";
import { Icon } from "@iconify/react";

const IndusInd = (props) => {
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
    slidesToShow: 2.5,
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
            IndusInd Bank
          </h1>
          <img
            src="/images/our-work/IndusInd/bb.svg"
            alt="IndusInd banner"
            className="img-fluid wow animate__animated animate__fadeIn"
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
                  <span className="colorGrey fw-400">IndusInd Bank</span>
                </div>
                <div className="col-sm-6 p-0 briefDetailsInner wow animate__animated animate__fadeInLeft">
                  <h4 className="colorBlack fw-800">Industry</h4>
                  <span className="colorGrey fw-400">Banking & Finance</span>
                </div>
                <div className="col-sm-6 p-0 briefDetailsInner wow animate__animated animate__fadeInRight">
                  <h4 className="colorBlack fw-800">Work</h4>
                  <span className="colorGrey fw-400">
                    Creative Design & Digital Marketing
                  </span>
                </div>
              </div>
            </div>
            <div className="gridSystemInner">
              <div className="d-flex customGap">
                <img
                  src="/images/our-work/IndusInd/sc1.svg"
                  alt="IndusInd"
                  className="img-fluid w-100 wow animate__animated animate__fadeInRight"
                />
                <img
                  src="/images/our-work/IndusInd/sc2.svg"
                  alt="IndusInd"
                  className="img-fluid w-100 wow animate__animated animate__fadeInRight  animate__delay-0.9s"
                  style={{ marginTop: 220 }}
                />
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
          <div className="row m-0">
            <div className="col-12 p-0 fullWidth wow animate__animated animate__slideInDown">
              <img
                src="/images/our-work/IndusInd/sb.svg"
                alt="service1"
                className="w-100"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="ourWorkSlider wow animate__animated animate__slideInLeft">
        <div className="content_container">
          <h2 className="sectionHead colorBlack fw-800 wow animate__animated animate__fadeIn">
            <img src="/images/icons/line.svg" alt="line" />
            More Works
          </h2>
          <Slider {...settings}>
            <div>
              <div className="sliderInner">
                <div className="imgHoverEffect position-relative">
                  <a
                    href="/tiger"
                    className="colorWhite fw-800"
                    onMouseEnter={props.onMouseEnterSmall}
                    onMouseLeave={props.onMouseLeaveSmall}
                  >
                    View Projects &nbsp;
                    <img
                      src="/images/icons/toparrowWhite.svg"
                      alt="toparrow"
                      className="img-fluid"
                    />
                  </a>
                  <img src="/images/cards/digital/tiger.jpg" alt="work" />
                </div>
                <h2 className="colorBlack fw-800">Tiger</h2>
                <span className="colorGrey fw-400">Digital Marketing</span>
              </div>
            </div>
            <div>
              <div className="sliderInner">
                <div className="imgHoverEffect position-relative">
                  <a
                    href="/indusind"
                    className="colorWhite fw-800"
                    onMouseEnter={props.onMouseEnterSmall}
                    onMouseLeave={props.onMouseLeaveSmall}
                  >
                    View Projects &nbsp;
                    <img
                      src="/images/icons/toparrowWhite.svg"
                      alt="toparrow"
                      className="img-fluid"
                    />
                  </a>
                  <img src="/images/cards/digital/indus.jpg" alt="work" />
                </div>
                <h2 className="colorBlack fw-800">IndusInd Bank</h2>
                <span className="colorGrey fw-400">Digital Marketing</span>
              </div>
            </div>
            <div>
              <div className="sliderInner">
                <div className="imgHoverEffect position-relative">
                  <a
                    href="/one-gaming-arcade"
                    className="colorWhite fw-800"
                    onMouseEnter={props.onMouseEnterSmall}
                    onMouseLeave={props.onMouseLeaveSmall}
                  >
                    View Projects &nbsp;
                    <img
                      src="/images/icons/toparrowWhite.svg"
                      alt="toparrow"
                      className="img-fluid"
                    />
                  </a>
                  <img src="/images/cards/digital/gaming.jpg" alt="work" />
                </div>
                <h2 className="colorBlack fw-800">One Gaming Arcade</h2>
                <span className="colorGrey fw-400">Digital Marketing</span>
              </div>
            </div>
            <div>
              <div className="sliderInner">
                <div className="imgHoverEffect position-relative">
                  <a
                    href="/jindalSAW"
                    className="colorWhite fw-800"
                    onMouseEnter={props.onMouseEnterSmall}
                    onMouseLeave={props.onMouseLeaveSmall}
                  >
                    View Projects &nbsp;
                    <img
                      src="/images/icons/toparrowWhite.svg"
                      alt="toparrow"
                      className="img-fluid"
                    />
                  </a>
                  <img src="/images/cards/digital/hed.jpg" alt="work" />
                </div>
                <h2 className="colorBlack fw-800">Jidal SAW</h2>
                <span className="colorGrey fw-400">Digital Marketing</span>
              </div>
            </div>
          </Slider>
          <Link
            to="/our-work"
            className="unsetAll"
            onClick={() => window.scrollTo(0, 0)}
            onMouseEnter={props.onMouseEnterSmall}
            onMouseLeave={props.onMouseLeaveSmall}
          >
            <span className="commonViewAll">View Our Projects</span>
            <Icon icon="clarity:arrow-line" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default IndusInd;
