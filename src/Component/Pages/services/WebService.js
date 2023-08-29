import React, { useState } from "react";
import { useEffect } from "react";
import { Accordion } from "react-bootstrap-accordion";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import WOW from "wowjs";
import { Icon } from "@iconify/react";
import ClientLogo from "../../Shared/ClientLogo";

const WebService = (props) => {
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
      <section className="servicePageSection webServicePageSection">
        <div className="content_container position-relative">
          <img
            src="/images/web-service.png"
            alt="web-service"
            className="webServiceBannerVector"
          />
          <div className="servicePageBanner">
            <h1 className="colorBlack fw-800 projectHeading wow animate__animated animate__fadeInUp">
              Result-Driven Custom <br />
              Website Design
            </h1>

            <h4 className="serviceKeyPoints colorBlack fw-800 wow animate__animated animate__fadeInUp animation_delay_100ms">
              Design.
            </h4>
            <h4 className="serviceKeyPoints colorBlack fw-800 wow animate__animated animate__fadeInUp animation_delay_200ms">
              Development.
            </h4>
            <h4 className="serviceKeyPoints colorRed fw-800 wow animate__animated animate__fadeInUp animation_delay_300ms">
              Launch.
            </h4>
          </div>
        </div>
      </section>

      <section className="webServiceWhatWeDo whatWeDo">
        <div className="content_container">
          <h2 className="sectionHead colorBlack fw-800 wow">
            <img src="/images/icons/line.svg" alt="line" />
            Our Web Services
          </h2>
          <div className="row m-0 whatwedoTabs">
            <div className="col-sm-6 p-0 whatwedoTabsL">
              <ul>
                <li
                  onClick={() => handleTabClick(0)}
                  className={
                    activeTab === 0
                      ? "wow animate__animated animate__fadeInUp active"
                      : "wow animate__animated animate__fadeInUp"
                  }
                >
                  {/* <span className="fw-800">01</span> */}
                  Interactive Websites
                </li>
                <li
                  onClick={() => handleTabClick(1)}
                  className={
                    activeTab === 1
                      ? "wow animate__animated animate__fadeInUp active"
                      : "wow animate__animated animate__fadeInUp"
                  }
                >
                  {/* <span className="fw-800">02</span> */}
                  Ecommerce Websites
                </li>
                <li
                  onClick={() => handleTabClick(2)}
                  className={
                    activeTab === 2
                      ? "wow animate__animated animate__fadeInUp active"
                      : "wow animate__animated animate__fadeInUp"
                  }
                >
                  {/* <span className="fw-800">03</span> */}
                  UI/ UX Design
                </li>
                <li
                  onClick={() => handleTabClick(3)}
                  className={
                    activeTab === 3
                      ? "wow animate__animated animate__fadeInUp active"
                      : "wow animate__animated animate__fadeInUp"
                  }
                >
                  {/* <span className="fw-800">04</span> */}
                  CMS Development
                </li>
              </ul>
            </div>
            <div className="col-sm-6 p-0 whatwedoTabsR">
              {activeTab === 0 && (
                <div
                  className={
                    activeTab === 0
                      ? "whatWeDoTabsResult wow animate__animated animate__fadeInLeft"
                      : "whatWeDoTabsResult"
                  }
                >
                  <p className="colorBlack fw-400">
                    Thoughtfully designed and developed brand and corporate
                    websites that are a confluence of strategy, content, design
                    and cutting edge web technologies. Building interactivity
                    that enhances the user experience and creates higher
                    engagement is our key strength. Our work has been
                    consistently awarded and showcased by various online web
                    galleries.
                  </p>
                  <a
                    href="/our-work"
                    className="unsetAll"
                    // onClick={() => window.scrollTo(0, 0)}
                  >
                    <span className="commonViewAll">View Our Projects</span>
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
                    Let’s energise and elevate your website presence, with the
                    right balance of business strategy and user excitement. We
                    conceptualise, strategise, design and develop websites and
                    apps that establish new design standards in the industry,
                    while performing flawlessly on various devices. We focus
                    heavily on user experience & brand upliftment by leveraging
                    design, content and technology.
                  </p>
                  <a
                    href="/our-work"
                    className="unsetAll"
                    // onClick={() => window.scrollTo(0, 0)}
                  >
                    <span className="commonViewAll">View Our Projects</span>
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
                    Let’s energise and elevate your website presence, with the
                    right balance of business strategy and user excitement. We
                    conceptualise, strategise, design and develop websites and
                    apps that establish new design standards in the industry,
                    while performing flawlessly on various devices. We focus
                    heavily on user experience & brand upliftment by leveraging
                    design, content and technology.
                  </p>
                  <a
                    href="/our-work"
                    className="unsetAll"
                    // onClick={() => window.scrollTo(0, 0)}
                  >
                    <span className="commonViewAll">View Our Projects</span>
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
                    Let’s energise and elevate your website presence, with the
                    right balance of business strategy and user excitement. We
                    conceptualise, strategise, design and develop websites and
                    apps that establish new design standards in the industry,
                    while performing flawlessly on various devices. We focus
                    heavily on user experience & brand upliftment by leveraging
                    design, content and technology.
                  </p>
                  <a
                    href="/our-work"
                    className="unsetAll"
                    // onClick={() => window.scrollTo(0, 0)}
                  >
                    <span className="commonViewAll">View Our Projects</span>
                    <Icon icon="clarity:arrow-line" />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section
        className="ourExpertiseSection wow"
        onMouseEnter={props.mouseEnterOnBlack}
        onMouseLeave={props.mouseLeaveOnBlack}
      >
        <div className="content_container">
          <h2 className="sectionHead colorWhite fw-800 wow">
            <img src="/images/icons/line-white.svg" alt="line" />
            Our Expertise
          </h2>
          <div className="accordianParent wow animate__animated animate__fadeIn animation_delay_300ms">
            <Accordion title="Web Applications and Portals">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
            </Accordion>
            <Accordion title="Campaign Landing Pages">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
            </Accordion>
            <Accordion title="Microsites">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
            </Accordion>
            <Accordion title="Blogs">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
            </Accordion>
            <Accordion title="Marketplace Product Pages">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
            </Accordion>
            <Accordion title="Drive Traffic">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
            </Accordion>
            <Accordion title="Lead Generation">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
            </Accordion>
            <Accordion title="Website Maintenance">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
            </Accordion>
            <Accordion title="Analytics">
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
          <h2 className="sectionHead colorWhite fw-800 wow">
            <img src="/images/icons/line-white.svg" alt="line" />
            Why Choose Us
          </h2>
          <div className="whyChooseUsDetails">
            <p className="colorWhite fw-400 wow animate__animated animate__fadeInUp">
              We have always broken moulds and pushed the limits of possibility
              to bring higher cohesion between your goals and the users’
              aspirations. Interactive tools, rich content, stunning visuals and
              intuitive UI combined with latest technologies like HTML5, CSS3,
              Bootstrap, PHP Laravel & more make for an immersive experience.
            </p>
            {/* <div className="d-flex align-items-center"> */}
            <ul className="d-flex align-items-center wow animate__animated animate__fadeInUp animation_delay_300ms">
              <li className="colorWhite fw-800">CSS</li>
              <li className="colorWhite fw-800">HTML 5</li>
              <li className="colorWhite fw-800">JavaScript</li>
              <li className="colorWhite fw-800">PHP</li>
              <li className="colorWhite fw-800">Microsoft.net</li>
              <li className="colorWhite fw-800">AngularJS</li>
              <li className="colorWhite fw-800">MySQL.</li>
              <li className="colorWhite fw-800">IOS</li>
              <li className="colorWhite fw-800">Android</li>
              <li className="colorWhite fw-800">Prestashop</li>
              <li className="colorWhite fw-800">Magento</li>
              <li className="colorWhite fw-800">WordPress</li>
            </ul>
            {/* </div> */}
          </div>
        </div>
      </section>

      <section className="webServicePageClient ourRecentClients">
        <div className="content_container">
          <h2 className="sectionHead colorBlack fw-800 wow">
            <img src="/images/icons/line.svg" alt="line" />
            Our Recent Clients
          </h2>
          <ClientLogo client="webClient" />
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
            <p className="mb-0 wow">We pride ourselves on top-</p>
            <p className="mb-0 wow">tier design practices, where</p>
            <p className="mb-0 wow">aesthetic and usability both</p>
            <p className="mb-0 wow">play a key role.</p>
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

      <section className="ourWorkSection">
        <div className="content_container">
          <h2 className="sectionHead colorBlack fw-800 wow">
            <img src="/images/icons/line.svg" alt="line" />
            Our Works
          </h2>
          <Slider
            {...settings}
            className="wow animate__animated animate__slideInUp"
          >
            <div>
              <div className="sliderInner">
                <img src="/images/work.png" alt="work" />
                <h2 className="colorBlack fw-800">Malikh Architecture</h2>
                <span className="colorGrey fw-400">Website Design</span>
              </div>
            </div>
            <div>
              <div className="sliderInner">
                <img src="/images/work.png" alt="work" />
                <h2 className="colorBlack fw-800">Malikh Architecture</h2>
                <span className="colorGrey fw-400">Website Design</span>
              </div>
            </div>
            <div>
              <div className="sliderInner">
                <img src="/images/work.png" alt="work" />
                <h2 className="colorBlack fw-800">Malikh Architecture</h2>
                <span className="colorGrey fw-400">Website Design</span>
              </div>
            </div>
            <div>
              <div className="sliderInner">
                <img src="/images/work.png" alt="work" />
                <h2 className="colorBlack fw-800">Malikh Architecture</h2>
                <span className="colorGrey fw-400">Website Design</span>
              </div>
            </div>
          </Slider>
          <a
            href="/our-work"
            className="unsetAll"
            // onClick={() => window.scrollTo(0, 0)}
          >
            <span className="commonViewAll">View Our Projects</span>
            <Icon icon="clarity:arrow-line" />
          </a>
        </div>
      </section>
    </>
  );
};

export default WebService;
