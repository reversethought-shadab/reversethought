import React, { useEffect } from "react";
import Slider from "react-slick";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import WOW from "wowjs";

const WelspunBKG = (props) => {
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
            Welspun BKG
          </h1>
          <div className="position-relative wow animate__animated animate__fadeIn">
            <div className="playButton">
              <Icon icon="ph:play-fill" />
            </div>
            <img
              src="/images/our-work/BKG/1.svg"
              alt="welspun-BKG"
              className="img-fluid w-100"
            />
          </div>
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
                  <span className="colorGrey fw-400">Welspun CSR</span>
                </div>
                <div className="col-sm-6 p-0 briefDetailsInner wow animate__animated animate__fadeInLeft">
                  <h4 className="colorBlack fw-800">Industry</h4>
                  <span className="colorGrey fw-400">Corporate</span>
                </div>
                <div className="col-sm-6 p-0 briefDetailsInner wow animate__animated animate__fadeInRight">
                  <h4 className="colorBlack fw-800">Work</h4>
                  <span className="colorGrey fw-400">
                    Video Production & Still Photography
                  </span>
                </div>
                <div className="col-sm-6 p-0 briefDetailsInner wow animate__animated animate__fadeInRight">
                  <h4 className="colorBlack fw-800">Technology</h4>
                  <span className="colorGrey fw-400">Sony Camera</span>
                </div>
              </div>
              <Link
                to="http://youtube.com/watch?v=4afBNIp1uGQ"
                className="unsetAll"
                target="_blank"
              >
                <span className="commonViewAll">Check Videos</span>
                <Icon icon="clarity:arrow-line" />
              </Link>
            </div>
            <div className="gridSystemInner">
              <div className="row m-0 imageView">
                <div className="col-12 p-0 text-start imageViewL wow animate__animated animate__fadeInRight">
                  <img
                    src="/images/our-work/CSR/second.png"
                    alt="CSR-1"
                    className="img-fluid w-100"
                  />
                </div>
                <div className="col-12 p-0 text-end imageViewR wow animate__animated animate__fadeInRight">
                  <img
                    src="/images/our-work/CSR/third.png"
                    alt="CSR-2"
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
          <div className="row m-0 zigZagImageSection">
            <div className="col-12 p-0 zigZagImageSection1 wow animate__animated animate__fadeInRight">
              <img
                src="/images/our-work/CSR/forthCSR.png"
                alt="CSR"
                className="img-fluid w-100"
              />
            </div>
            <div className="col-12 p-0 text-end zigZagImageSection2 wow animate__animated animate__fadeInLeft">
              <img
                src="/images/our-work/CSR/fifthCSR.png"
                alt="CSR"
                className="img-fluid w-100"
              />
            </div>
            <div className="col-12 p-0 zigZagImageSection3 wow animate__animated animate__fadeInRight">
              <img
                src="/images/our-work/CSR/sixthCSR.png"
                alt="CSR"
                className="img-fluid w-100"
              />
            </div>
            <div className="col-12 p-0 text-end zigZagImageSection4 wow animate__animated animate__fadeInLeft">
              <img
                src="/images/our-work/CSR/seventhCSR.png"
                alt="CSR"
                className="img-fluid w-100"
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
                  <a
                    href="/canadian-woods"
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
                  <img src="/images/cards/video/cw.jpg" alt="work" />
                </div>
                <h2 className="colorBlack fw-800">Canadian Woods</h2>
                <span className="colorGrey fw-400">Video Production</span>
              </div>
            </div>
            <div>
              <div className="sliderInner">
                <div className="imgHoverEffect position-relative">
                  <a
                    href="/DHCinternational"
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
                  <img src="/images/cards/video/DHCI.jpg" alt="work" />
                </div>
                <h2 className="colorBlack fw-800">DHC International</h2>
                <span className="colorGrey fw-400">Video Production</span>
              </div>
            </div>
            <div>
              <div className="sliderInner">
                <div className="imgHoverEffect position-relative">
                  <a
                    href="/dorado-ivory"
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
                  <img src="/images/cards/video/dorado.jpg" alt="work" />
                </div>
                <h2 className="colorBlack fw-800">Dorado Ivory</h2>
                <span className="colorGrey fw-400">Video Production</span>
              </div>
            </div>
            <div></div>
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

export default WelspunBKG;
