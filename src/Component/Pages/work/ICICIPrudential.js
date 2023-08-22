import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import WOW from "wowjs";
import { Icon } from "@iconify/react";

const ICICIPrudential = (props) => {
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
            ICICI Prudential Life Ins.
          </h1>
          <img
            src="/images/our-work/icici.svg"
            alt="icici"
            className="img-fluid w-100 wow animate__animated animate__fadeIn"
          />
          <div className="gridSystem">
            <div className="gridSystemInner">
              <h2 className="colorRed fw-800 wow animate__animated animate__fadeIn">
                Brief
              </h2>
              <p className="colorGrey fw-400 animate__animated animate__fadeInLeft">
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
                  <span className="colorGrey fw-400">
                    ICICI Prudential Life Insurance
                  </span>
                </div>
                <div className="col-sm-6 p-0 briefDetailsInner wow animate__animated animate__fadeInLeft">
                  <h4 className="colorBlack fw-800">Industry</h4>
                  <span className="colorGrey fw-400">Insurance</span>
                </div>
                <div className="col-sm-6 p-0 briefDetailsInner wow animate__animated animate__fadeInRight">
                  <h4 className="colorBlack fw-800">Work</h4>
                  <span className="colorGrey fw-400">
                    Creative design & Digital Marketing
                  </span>
                </div>
              </div>
              <a href="/our-work" className="unsetAll">
                <span className="commonViewAll">Check Posts</span>
                <Icon icon="clarity:arrow-line" />
              </a>
            </div>
            <div className="gridSystemInner h-100">
              <div className="row m-0 imageView noGap iciciImageView h-100">
                <div className="col-6 col-sm-6 ps-0 text-start imageViewL wow animate__animated animate__fadeInRight">
                  <img
                    src="/images/our-work/icici-b1.png"
                    alt="elleys-1"
                    className="img-fluid w-100"
                  />
                </div>
                <div className="col-6 col-sm-6 pe-0 d-flex align-items-end text-end imageViewR wow animate__animated animate__fadeInRight animate__delay-1s">
                  <img
                    src="/images/our-work/icici-b2.png"
                    alt="elleys-2"
                    className="img-fluid w-100"
                  />
                </div>
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
          <div className="d-flex align-items-center iciciImageView">
            <div>
              <img
                src="/images/our-work/icici-s2.svg"
                alt="elleys-2"
                className="img-fluid wow animate__animated animate__fadeInLeft"
              />
            </div>
            <div>
              <img
                src="/images/our-work/icici-s1.svg"
                alt="elleys-2"
                className="img-fluid wow animate__animated animate__fadeInRight"
              />
            </div>
          </div>
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
                  <a href="#" className="colorWhite fw-800">
                    View Projects &nbsp;
                    <img
                      src="/images/icons/toparrowWhite.svg"
                      alt="toparrow"
                      className="img-fluid"
                    />
                  </a>
                  <img src="/images/work.png" alt="work" />
                </div>
                <h2 className="colorBlack fw-800">Malikh Architecture</h2>
                <span className="colorGrey fw-400">Website Design</span>
              </div>
            </div>
            <div>
              <div className="sliderInner">
                <div className="imgHoverEffect position-relative">
                  <a href="#" className="colorWhite fw-800">
                    View Projects &nbsp;
                    <img
                      src="/images/icons/toparrowWhite.svg"
                      alt="toparrow"
                      className="img-fluid"
                    />
                  </a>
                  <img src="/images/work.png" alt="work" />
                </div>
                <h2 className="colorBlack fw-800">Malikh Architecture</h2>
                <span className="colorGrey fw-400">Website Design</span>
              </div>
            </div>
            <div>
              <div className="sliderInner">
                <div className="imgHoverEffect position-relative">
                  <a href="#" className="colorWhite fw-800">
                    View Projects &nbsp;
                    <img
                      src="/images/icons/toparrowWhite.svg"
                      alt="toparrow"
                      className="img-fluid"
                    />
                  </a>
                  <img src="/images/work.png" alt="work" />
                </div>
                <h2 className="colorBlack fw-800">Malikh Architecture</h2>
                <span className="colorGrey fw-400">Website Design</span>
              </div>
            </div>
            <div>
              <div className="sliderInner">
                <div className="imgHoverEffect position-relative">
                  <a href="#" className="colorWhite fw-800">
                    View Projects &nbsp;
                    <img
                      src="/images/icons/toparrowWhite.svg"
                      alt="toparrow"
                      className="img-fluid"
                    />
                  </a>
                  <img src="/images/work.png" alt="work" />
                </div>
                <h2 className="colorBlack fw-800">Malikh Architecture</h2>
                <span className="colorGrey fw-400">Website Design</span>
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

export default ICICIPrudential;
