import React, { useState } from "react";
import { useEffect } from "react";
import { Accordion } from "react-bootstrap-accordion";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import WOW from "wowjs";
import { Icon } from "@iconify/react";
import ClientLogo from "../../Shared/ClientLogo";

const DigitalActivationServices = (props) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

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
      <section className="servicePageSection webServicePageSection DigitalActivationServices position-relative">
        <div className="content_container position-relative">
          <img
            src="/images/digital-activation-services.png"
            alt="digital-activation-services"
            className="digitalActivationServicesVector"
          />
          <div className="servicePageBanner">
            <h1 className="colorBlack fw-800 projectHeading wow animate__animated animate__fadeInUp">
              Activating Your Digital <br />
              Presence with Impact!
            </h1>

            <h4 className="serviceKeyPoints colorBlack fw-800 wow animate__animated animate__fadeInUp animation_delay_100ms">
              Impact.
            </h4>
            <h4 className="serviceKeyPoints colorBlack fw-800 wow animate__animated animate__fadeInUp animation_delay_200ms">
              Inspire.
            </h4>
            <h4 className="serviceKeyPoints colorRed fw-800 wow animate__animated animate__fadeInUp animation_delay_300ms">
              Activate.
            </h4>
          </div>
        </div>
      </section>

      <section className="webServiceWhatWeDo whatWeDo">
        <div className="content_container">
          <h2 className="sectionHead colorBlack fw-800 wow">
            <img src="/images/icons/line.svg" alt="line" />
            Our Digital Activation Services
          </h2>
          <div className="row m-0 whatwedoTabs">
            <div className="col-sm-6 p-0 whatwedoTabsL wow animate__animated animate__fadeInUp">
              <ul>
                <li
                  onClick={() => handleTabClick(0)}
                  className={activeTab === 0 ? "active" : ""}
                >
                  Instagram Filters
                </li>
                <li
                  onClick={() => handleTabClick(1)}
                  className={activeTab === 1 ? "active" : ""}
                >
                  Custom Games
                </li>
                <li
                  onClick={() => handleTabClick(2)}
                  className={activeTab === 2 ? "active" : ""}
                >
                  Engagement Apps
                </li>
                <li
                  onClick={() => handleTabClick(3)}
                  className={activeTab === 3 ? "active" : ""}
                >
                  Sales Solutions
                </li>
              </ul>
            </div>
            <div className="col-sm-6 p-0 whatwedoTabsR wow animate__animated animate__fadeInUp animation_delay_300ms">
              {activeTab === 0 && (
                <div
                  className={
                    activeTab === 0
                      ? "whatWeDoTabsResult wow animate__animated animate__fadeInLeft"
                      : "whatWeDoTabsResult"
                  }
                >
                  <p className="colorBlack fw-400">
                    We create custom filters that work with the basic elements
                    and value proposition of your brand that can be accessed
                    through Instagram or even through an independent app.
                  </p>
                  <a
                    href="/our-work"
                    className="unsetAll"
                    // onClick={() => window.scrollTo(0, 0)}
                    onMouseEnter={props.onMouseEnterSmall}
                    onMouseLeave={props.onMouseLeaveSmall}
                  >
                    <span className="commonViewAll">Learn More</span>
                    <Icon icon="clarity:arrow-line" />
                  </a>
                </div>
              )}
              {activeTab === 1 && (
                <div
                  className={
                    activeTab === 1
                      ? "whatWeDoTabsResult wow animate__animated animate__fadeInLeft"
                      : "whatWeDoTabsResult"
                  }
                >
                  <p className="colorBlack fw-400">
                    Quick games customised to your brand are a great way to run
                    promotions and create a buzz around your brand. We can
                    implement these on your website for your users or even run
                    them on social media for you.
                  </p>
                  <a
                    href="/our-work"
                    className="unsetAll"
                    // onClick={() => window.scrollTo(0, 0)}
                    onMouseEnter={props.onMouseEnterSmall}
                    onMouseLeave={props.onMouseLeaveSmall}
                  >
                    <span className="commonViewAll">Learn More</span>
                    <Icon icon="clarity:arrow-line" />
                  </a>
                </div>
              )}
              {activeTab === 2 && (
                <div
                  className={
                    activeTab === 2
                      ? "whatWeDoTabsResult wow animate__animated animate__fadeInLeft"
                      : "whatWeDoTabsResult"
                  }
                >
                  <p className="colorBlack fw-400">
                    How cool would it be if you could celebrate festivals or
                    play games with your friends virtually? Now you can do just
                    that with custom apps that allow you to share, play and win
                    with your friends. As a brand, this is a fantastic way to
                    build brand loyalty with your customers.
                  </p>
                  <a
                    href="/our-work"
                    className="unsetAll"
                    // onClick={() => window.scrollTo(0, 0)}
                    onMouseEnter={props.onMouseEnterSmall}
                    onMouseLeave={props.onMouseLeaveSmall}
                  >
                    <span className="commonViewAll">Learn More</span>
                    <Icon icon="clarity:arrow-line" />
                  </a>
                </div>
              )}
              {activeTab === 3 && (
                <div
                  className={
                    activeTab === 3
                      ? "whatWeDoTabsResult wow animate__animated animate__fadeInLeft"
                      : "whatWeDoTabsResult"
                  }
                >
                  <p className="colorBlack fw-400">
                    Give your sales force the tools that create an impact!
                    Business Presentations, collaterals, videos or a combination
                    of these go a long way in delivering a powerful message. Our
                    team can conceptualise and create innovative, customised
                    sales tools around any business requirement.
                  </p>
                  <a
                    href="/our-work"
                    className="unsetAll"
                    // onClick={() => window.scrollTo(0, 0)}
                    onMouseEnter={props.onMouseEnterSmall}
                    onMouseLeave={props.onMouseLeaveSmall}
                  >
                    <span className="commonViewAll">Learn More</span>
                    <Icon icon="clarity:arrow-line" />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      <section className="ourWorkSlider wow animate__animated animate__slideInLeft">
        <div className="content_container">
          <h2 className="sectionHead colorBlack wow fw-800">
            <img src="/images/icons/line.svg" alt="line" />
            More Works
          </h2>
          <Slider {...settings}>
            <div>
              <div className="sliderInner">
                <div className="imgHoverEffect position-relative">
                  <a
                    href="/amazon-sambhav"
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
                  <img
                    src="/images/cards/Digital-activation/amazon.jpg"
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
                  <a
                    href="/alkem-ar-filters"
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
                  <a
                    href="/mcdowell"
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
                  <img
                    src="/images/cards/Digital-activation/mcdowll.jpg"
                    alt="work"
                  />
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
                  <a
                    href="/loreal-matrix"
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
                  <img
                    src="/images/cards/Digital-activation/loreal.jpg"
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
            onMouseEnter={props.onMouseEnterSmall}
            onMouseLeave={props.onMouseLeaveSmall}
          >
            <span className="commonViewAll">View Our Projects</span>
            <Icon icon="clarity:arrow-line" />
          </Link>
        </div>
      </section>
      <section
        className="ourExpertiseSection wow animate__animated animate__slideInUp"
        onMouseEnter={props.mouseEnterOnBlack}
        onMouseLeave={props.mouseLeaveOnBlack}
      >
        <div className="content_container">
          <h2 className="sectionHead text-white colorWhite fw-800 wow">
            <img src="/images/icons/line-white.svg" alt="line" />
            Our Expertise
          </h2>
          <div className="accordianParent wow animate__animated animate__fadeIn animation_delay_300ms">
            <Accordion title="Infographics">
              <p>
                Visualizing information requires not just creativity, but also a
                keen understanding of the data and an analytical approach that
                can best present it. As audiences move increasingly away from
                intense use of words, our infographics will help you create
                shareable, easy to comprehend content.
              </p>
            </Accordion>
            <Accordion title="Emailers & Newsletters">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
            </Accordion>
            <Accordion title="GIFs Creatives">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
            </Accordion>
            <Accordion title="WhatsApp Creatives">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
            </Accordion>
            <Accordion title="Logo & Stationery">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
            </Accordion>
            <Accordion title="Brochures & Flyers">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
            </Accordion>
            <Accordion title="Graphic Design">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
            </Accordion>
            <Accordion title="Giveaway Kit Design">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
            </Accordion>
            <Accordion title="Outdoor Ads">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
            </Accordion>
          </div>
          <h2 className="sectionHead colorWhite text-white fw-800 wow">
            <img src="/images/icons/line-white.svg" alt="line" />
            Why Choose Us
          </h2>
          <div className="whyChooseUsDetails">
            <p className="colorWhite fw-400 wow animate__animated animate__fadeInUp">
              When it comes to digital activation creation, choosing us means
              partnering with a team that thrives on innovation and creativity.
              Our approach is rooted in delivering tailored solutions that align
              perfectly with your project's unique goals and your target
              audience's preferences. With a firm grasp of storytelling
              Real-time Graphics Processing, including web design and
              development tools, ARCore and ARKit, and 3D modelling and
              rendering, we're equipped to transform your vision into reality.
            </p>
            <ul className="d-flex align-items-center wow animate__animated animate__fadeInUp animation_delay_300ms">
              <li
                className="colorWhite fw-800"
                onMouseEnter={props.mouseEnterOnBlack}
                onMouseLeave={props.mouseLeaveOnBlack}
              >
                Computer Vision
              </li>
              <li
                className="colorWhite fw-800"
                onMouseEnter={props.mouseEnterOnBlack}
                onMouseLeave={props.mouseLeaveOnBlack}
              >
                3D Modeling and Rendering
              </li>
              <li
                className="colorWhite fw-800"
                onMouseEnter={props.mouseEnterOnBlack}
                onMouseLeave={props.mouseLeaveOnBlack}
              >
                ARCore and ARKit
              </li>
              <li
                className="colorWhite fw-800"
                onMouseEnter={props.mouseEnterOnBlack}
                onMouseLeave={props.mouseLeaveOnBlack}
              >
                Motion Tracking
              </li>
              <li
                className="colorWhite fw-800"
                onMouseEnter={props.mouseEnterOnBlack}
                onMouseLeave={props.mouseLeaveOnBlack}
              >
                VR Platforms
              </li>
              <li
                className="colorWhite fw-800"
                onMouseEnter={props.mouseEnterOnBlack}
                onMouseLeave={props.mouseLeaveOnBlack}
              >
                WebXR
              </li>
              <li
                className="colorWhite fw-800"
                onMouseEnter={props.mouseEnterOnBlack}
                onMouseLeave={props.mouseLeaveOnBlack}
              >
                Sensors
              </li>
              <li
                className="colorWhite fw-800"
                onMouseEnter={props.mouseEnterOnBlack}
                onMouseLeave={props.mouseLeaveOnBlack}
              >
                Audio Technology
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="webServicePageClient ourRecentClients">
        <div className="content_container">
          <h2 className="sectionHead colorBlack fw-800 wow">
            <img src="/images/icons/line.svg" alt="line" />
            Our Recent Clients
          </h2>
          <ClientLogo client="digitalActivationClient" />
        </div>
      </section>

      <section className="pt-0 creativeThoughts position-relative">
        <div className="content_container">
          <img
            src="/images/icons/circle-l.svg"
            alt="circle-l"
            className="wow animate__animated animate__rotateIn"
          />

          <div className="colorBlack fw-800 company">
            <p className="mb-0 wow">We transform your vision</p>
            <p className="mb-0 wow">into creative, compelling,</p>
            <p className="mb-0 wow">and visually stunning</p>
            <p className="mb-0 wow">designs.</p>
          </div>
          <div className="text-end">
            <img
              src="/images/icons/circle-r.svg"
              alt="circle-r"
              className="wow animate__animated animate__rotateIn"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default DigitalActivationServices;
