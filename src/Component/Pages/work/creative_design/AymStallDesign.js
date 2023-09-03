import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import WOW from "wowjs";
import { Icon } from "@iconify/react";

const AymStallDesign = (props) => {
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
            AYM Stall Design
          </h1>
          <img
            src="/images/our-work/creative_design/stall/first.svg"
            alt="tata"
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
                  <span className="colorGrey fw-400">AYM Stall Design </span>
                </div>
                <div className="col-sm-6 p-0 briefDetailsInner wow animate__animated animate__fadeInLeft">
                  <h4 className="colorBlack fw-800">Industry</h4>
                  <span className="colorGrey fw-400">Corporate</span>
                </div>
                <div className="col-sm-6 p-0 briefDetailsInner wow animate__animated animate__fadeInRight">
                  <h4 className="colorBlack fw-800">Work</h4>
                  <span className="colorGrey fw-400">Creative Design</span>
                </div>
              </div>
            </div>
            <div className="gridSystemInner">
              <div className="d-flex customGap">
                <img
                  src="/images/our-work/creative_design/stall/second.svg"
                  alt="Aym"
                  className="img-fluid w-100 wow animate__animated animate__fadeInRight"
                />
                {/* <img
                  src="/images/our-work/elleys-2.svg"
                  alt="elleys-2"
                  className="img-fluid w-100 wow animate__animated animate__fadeInRight animate__delay-0.9s"
                />
                <img
                  src="/images/our-work/elleys-3.svg"
                  alt="elleys-3"
                  className="img-fluid w-100 wow animate__animated animate__fadeInRight"
                /> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className=" serviceImageSection-3"
        onMouseEnter={props.mouseEnterOnBlack}
        onMouseLeave={props.mouseLeaveOnBlack}
      >
        <div className="content_container">
          <div className="row m-0">
            <div className="col-12 p-0 fullWidth wow animate__animated animate__slideInDown">
              <img
                src="/images/our-work/creative_design/stall/third.svg"
                alt="service1"
                className="w-100 "
              />
            </div>
            {/* <div className="col-sm-6 p-0 leftImg wow animate__animated animate__slideInLeft">
              <img
                src="/images/our-work/service2.svg"
                alt="service2"
                className="w-100 h-100" 
              />
            </div>
            <div className="col-sm-6 p-0 rightImg wow animate__animated animate__slideInRight">
              <img
                src="/images/our-work/service3.svg"
                alt="service3"
                className="w-100"
              />
              <img
                src="/images/our-work/service4.svg"
                alt="service4"
                className="w-100"
              />
            </div> */}
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
                  <a href="/Memoria" className="colorWhite fw-800">
                    View Projects &nbsp;
                    <img
                      src="/images/icons/toparrowWhite.svg"
                      alt="toparrow"
                      className="img-fluid"
                    />
                  </a>
                  <img
                    src="/images/our-work/creative_design/aymbrochure/Maskgroup.svg"
                    alt="work"
                  />
                </div>
                <h2 className="colorBlack fw-800">Memoria</h2>
                <span className="colorGrey fw-400">Creative Design</span>
              </div>
            </div>
            <div>
              <div className="sliderInner">
                <div className="imgHoverEffect position-relative">
                  <a href="/rsbl-calendar" className="colorWhite fw-800">
                    View Projects &nbsp;
                    <img
                      src="/images/icons/toparrowWhite.svg"
                      alt="toparrow"
                      className="img-fluid"
                    />
                  </a>
                  <img
                    src="/images/thumbnails/all_projects/calendar.webp"
                    alt="work"
                  />
                </div>
                <h2 className="colorBlack fw-800">RSBL Calendar</h2>
                <span className="colorGrey fw-400">Creative Design</span>
              </div>
            </div>
            <div>
              <div className="sliderInner">
                <div className="imgHoverEffect position-relative">
                  <a href="/aym-syntex-brochure" className="colorWhite fw-800">
                    View Projects &nbsp;
                    <img
                      src="/images/icons/toparrowWhite.svg"
                      alt="toparrow"
                      className="img-fluid"
                    />
                  </a>
                  <img
                    src="/images/our-work/creative_design/aymbrochure/AYM1.svg"
                    alt="work"
                  />
                </div>
                <h2 className="colorBlack fw-800">Aym Syntex Brochure</h2>
                <span className="colorGrey fw-400">Creative Design</span>
              </div>
            </div>
            <div>
              <div className="sliderInner">
                <div className="imgHoverEffect position-relative">
                  <a href="/aym-syntex" className="colorWhite fw-800">
                    View Projects &nbsp;
                    <img
                      src="/images/icons/toparrowWhite.svg"
                      alt="toparrow"
                      className="img-fluid"
                    />
                  </a>
                  <img
                    src="/images/our-work/websites/aymsyntax/Image267.svg"
                    alt="work"
                  />
                </div>
                <h2 className="colorBlack fw-800">AYM Syntex</h2>
                <span className="colorGrey fw-400">Creative Design</span>
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

export default AymStallDesign;