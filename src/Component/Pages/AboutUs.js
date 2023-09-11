import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import WOW from "wowjs";
import News from "../Shared/News";
import Slider from "react-slick";
import WhatWeHaveDone from "../Shared/WhatWeHaveDone";
import ClientLogo from "../Shared/ClientLogo";
import { Icon } from "@iconify/react";

const AboutUs = (props) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  useEffect(() => {
    const wow = new WOW.WOW({
      live: false, // Set to false if you want to trigger the animations only once
    });
    wow.init();
  }, []);
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2.2,
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
      <section className="aboitUsSection">
        <div className="content_container position-relative">
          <div className="servicePageBanner">
            <h1 className="colorBlack fw-800 projectHeading wow animate__animated animate__fadeInUp">
              We’re A Digital Agency
            </h1>
            <p className="colorBlack fw-400 projectDesc wow animate__animated animate__fadeInUp animation_delay_100ms">
              Unleash Your Brand's Potential with Our Strategic and Creative
              Expertise in the Beautiful Online Space
            </p>
            <p
              className="watch_reel_txt mb-0 mt-0 wow animate__animated animate__fadeInUp animation_delay_200ms"
              onMouseEnter={props.onMouseEnterSmall}
              onMouseLeave={props.onMouseLeaveSmall}
            >
              <img
                src="/images/icons/play.svg"
                alt="play"
                className="img-fluid hero_reel_play"
              />
              <span>Watch the Agency Reel!</span>
            </p>

            <h4 className="serviceKeyPoints colorBlack fw-800 wow animate__animated animate__fadeInUp animation_delay_300ms">
              Agility.
            </h4>
            <h4 className="serviceKeyPoints colorBlack fw-800 wow animate__animated animate__fadeInUp animation_delay_500ms">
              Strategy.
            </h4>
            <h4 className="serviceKeyPoints colorRed fw-800 wow animate__animated animate__fadeInUp animation_delay_700ms">
              Technology.
            </h4>
            <img
              src="/images/about-us.png"
              className="about-us"
              alt="about-us"
            />
          </div>
        </div>
      </section>

      <section className="aboitUsSectionwwd whatWeDo">
        <div className="content_container">
          <h2 className="sectionHead colorBlack fw-800 wow">
            <img src="/images/icons/line.svg" alt="line" />
            What we do
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
                  <span className="fw-800">01</span>
                  Websites/App
                </li>
                <li
                  onClick={() => handleTabClick(1)}
                  className={
                    activeTab === 1
                      ? "wow animate__animated animate__fadeInUp active"
                      : "wow animate__animated animate__fadeInUp"
                  }
                >
                  <span className="fw-800">02</span>
                  Video Production
                </li>
                <li
                  onClick={() => handleTabClick(2)}
                  className={
                    activeTab === 2
                      ? "wow animate__animated animate__fadeInUp active"
                      : "wow animate__animated animate__fadeInUp"
                  }
                >
                  <span className="fw-800">03</span>
                  Digital Marketing
                </li>
                <li
                  onClick={() => handleTabClick(3)}
                  className={
                    activeTab === 3
                      ? "wow animate__animated animate__fadeInUp active"
                      : "wow animate__animated animate__fadeInUp"
                  }
                >
                  <span className="fw-800">04</span>
                  Creative Design
                </li>
                <li
                  onClick={() => handleTabClick(4)}
                  className={
                    activeTab === 4
                      ? "wow animate__animated animate__fadeInUp active"
                      : "wow animate__animated animate__fadeInUp"
                  }
                >
                  <span className="fw-800">05</span>
                  Digital Activations
                </li>
                <li
                  onClick={() => handleTabClick(5)}
                  className={
                    activeTab === 5
                      ? "wow animate__animated animate__fadeInUp active"
                      : "wow animate__animated animate__fadeInUp"
                  }
                >
                  <span className="fw-800">06</span>
                  Photography
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
                  <ul className="d-flex">
                    <li className="colorBlack fw-800">UI/UX</li>
                    <li className="colorBlack fw-800">Backend Development</li>
                    <li className="colorBlack fw-800">Front-end Development</li>
                    <li className="colorBlack fw-800">Mobile App design</li>
                    <li className="colorBlack fw-800">WordPress Development</li>
                  </ul>
                  <p className="colorBlack fw-400">
                    Let’s energize and elevate your website presence, with the
                    right balance of business strategy and user excitement. We
                    conceptualize, strategise, design and develop websites and
                    apps that establish new design standards in the industry,
                    while performing flawlessly on various devices. We focus
                    heavily on user experience & brand upliftment by leveraging
                    design, content and technology.
                  </p>
                  <a
                    href="/websiteDesign"
                    className="unsetAll"
                    onClick={() => window.scrollTo(0, 0)}
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
                  <ul className="d-flex">
                    <li className="colorBlack fw-800">Concept & Scripting</li>
                    <li className="colorBlack fw-800">
                      On-ground & Drone Shoot
                    </li>
                    <li className="colorBlack fw-800">Graphics & Animation</li>
                    <li className="colorBlack fw-800">Motion Graphics</li>
                    <li className="colorBlack fw-800">2d Animation</li>
                  </ul>
                  <p className="colorBlack fw-400">
                    A video is the best marketing tool for business. We
                    conceptualize and produce a broad range of videos from
                    corporate profiles to specific application videos. Through a
                    mix of on-ground & aerial photography, graphics, animation
                    and many more styles we can produce any kind of film for any
                    application that you can think of.
                  </p>
                  <a
                    href="/Video-production-Services"
                    className="unsetAll"
                    onClick={() => window.scrollTo(0, 0)}
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
                  <ul className="d-flex">
                    <li className="colorBlack fw-800">SEO</li>
                    <li className="colorBlack fw-800">
                      Social Media Marketing
                    </li>
                    <li className="colorBlack fw-800">Performance Marketing</li>
                    <li className="colorBlack fw-800">Integrated Marketing</li>
                    <li className="colorBlack fw-800">Google Advertising</li>
                    <li className="colorBlack fw-800">
                      SMS & Whatsapp Campaigns
                    </li>
                  </ul>
                  <p className="colorBlack fw-400">
                    If your business isn’t online and visible to your customers,
                    you’re missing out on a crucial opportunity to grow. Through
                    a range of tools such as SEO, SEM as well as social media
                    marketing we create the right strategy and content to
                    achieve your business goals both organically and through
                    influencer and paid marketing.
                  </p>
                  <a
                    href="/Digital-Marketing-Services"
                    className="unsetAll"
                    onClick={() => window.scrollTo(0, 0)}
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
                  <ul className="d-flex">
                    <li className="colorBlack fw-800">Print design</li>
                    <li className="colorBlack fw-800">
                      Social Media Creatives
                    </li>
                    <li className="colorBlack fw-800">Logo & Identity</li>
                    <li className="colorBlack fw-800">
                      Internal Communication
                    </li>
                  </ul>
                  <p className="colorBlack fw-400">
                    Creativity is the backbone of our agency and the reason for
                    us to do what we do. We design all kinds of branding
                    materials as well as collaterals that captivate and
                    effectively send the message across. We handle the design
                    and content for all kinds of digital and print creatives .
                  </p>
                  <a
                    href="/Creative-Services"
                    className="unsetAll"
                    onClick={() => window.scrollTo(0, 0)}
                    onMouseEnter={props.onMouseEnterSmall}
                    onMouseLeave={props.onMouseLeaveSmall}
                  >
                    <span className="commonViewAll">Learn More</span>
                    <Icon icon="clarity:arrow-line" />
                  </a>
                </div>
              )}
              {activeTab === 4 && (
                <div
                  className={
                    activeTab === 4
                      ? "whatWeDoTabsResult wow animate__animated animate__fadeInLeft"
                      : "whatWeDoTabsResult"
                  }
                >
                  <ul className="d-flex">
                    <li className="colorBlack fw-800">AR Filters</li>
                    <li className="colorBlack fw-800">
                      SMS & Whatsapp Campaigns
                    </li>
                    <li className="colorBlack fw-800">
                      Digital Hoarding Video Ads
                    </li>
                  </ul>
                  <p className="colorBlack fw-400">
                    Break the clutter and engage your audience through custom
                    developed digital activations in the form of apps, games,
                    filters and more. We work closely with your team to develop
                    concepts that add weight to your messaging and develop the
                    assets to execute your campaign.
                  </p>
                  <a
                    href="/Digital-Activation-Services"
                    className="unsetAll"
                    onClick={() => window.scrollTo(0, 0)}
                    onMouseEnter={props.onMouseEnterSmall}
                    onMouseLeave={props.onMouseLeaveSmall}
                  >
                    <span className="commonViewAll">Learn More</span>
                    <Icon icon="clarity:arrow-line" />
                  </a>
                </div>
              )}
              {activeTab === 5 && (
                <div
                  className={
                    activeTab === 5
                      ? "whatWeDoTabsResult wow animate__animated animate__fadeInLeft"
                      : "whatWeDoTabsResult"
                  }
                >
                  <ul className="d-flex">
                    <li className="colorBlack fw-800">AR Filters</li>
                    <li className="colorBlack fw-800">
                      SMS & Whatsapp Campaigns
                    </li>
                    <li className="colorBlack fw-800">
                      Digital Hoarding Video Ads
                    </li>
                  </ul>
                  <p className="colorBlack fw-400">
                    Break the clutter and engage your audience through custom
                    developed digital activations in the form of apps, games,
                    filters and more. We work closely with your team to develop
                    concepts that add weight to your messaging and develop the
                    assets to execute your campaign.
                  </p>
                  <a
                    href="/Photography"
                    className="unsetAll"
                    onClick={() => window.scrollTo(0, 0)}
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

      <WhatWeHaveDone />

      <section className="ourValueSection">
        <div className="content_container">
          <h2 className="sectionHead colorBlack fw-800 wow">
            <img src="/images/icons/line.svg" alt="line" />
            Our Values
          </h2>
          <p className="projectDesc colorBlack fw-800 wow animate__animated animate__fadeInUp animation_delay_200ms">
            <span className="colorRed">Through the years,</span> we have been
            shaped and formed by both successes and failures.
          </p>
          <div className="gridSystem">
            <div className="gridSystemInner wow animate__animated animate__fadeInUp animation_delay_100ms">
              <img
                src="/images/about/pN3.png"
                alt="Our Value"
                className="img-fluid"
              />
              <h4 className="colorRed fw-800">Strong Understanding</h4>
              <p className="colorBlack fw-400">
                Research, communication and understanding help us get closer to
                your audience and get a sense of your business and what can
                bring results.
              </p>
            </div>
            <div className="gridSystemInner wow animate__animated animate__fadeInUp animation_delay_200ms">
              <img
                src="/images/about/pn4.png"
                alt="Our Value"
                className="img-fluid"
              />
              <h4 className="colorRed fw-800">Sound Strategy</h4>
              <p className="colorBlack fw-400">
                Results happen when you have the right plan and the tools to
                measure their effectiveness.
              </p>
            </div>
            <div className="gridSystemInner wow animate__animated animate__fadeInUp animation_delay_300ms">
              <img
                src="/images/about/pn2.png"
                alt="Our Value"
                className="img-fluid"
              />
              <h4 className="colorRed fw-800">Engaging Communication</h4>
              <p className="colorBlack fw-400">
                Let’s own the conversations in your space with communication
                that’s bound to make an impact.
              </p>
            </div>
          </div>
          {/* <div className="imageScrollBar wow animate__animated animate__slideInUp">
            <img
              src="/images/about/group.png"
              alt="Our Team"
              className="img-fluid"
            />

            <img
              src="/images/team-3.svg"
              alt="Our Team"
              className="img-fluid"
            />
            <img
              src="/images/team-1.svg"
              alt="Our Team"
              className="img-fluid"
            />
            <img
              src="/images/team-2.svg"
              alt="Our Team"
              className="img-fluid"
            />
          </div> */}

          <section className="aboutscroll">
            <div className="content_container">
              <Slider
                {...settings}
                className="wow animate__animated animate__slideInUp"
              >
                <div>
                  <div className="sliderInnerabout">
                    <img
                      src="/images/about/group.png"
                      alt="Our Team"
                      className="img-fluid"
                      style={{ height: "520px" }}
                    />
                  </div>
                </div>
                <div>
                  <div className="sliderInnerabout">
                    <img
                      src="/images/about/office.jpg"
                      alt="Our Team"
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div>
                  <div className="sliderInnerabout">
                    <img
                      src="/images/about/tushar-sunidhi.jpg"
                      alt="Our Team"
                    />
                  </div>
                </div>
              </Slider>
            </div>
          </section>

          <div className="joinOurTribe wow animate__animated animate__slideInUp">
            <h2 className="sectionHead colorBlack fw-800">
              <img src="/images/icons/line.svg" alt="line" />
              Join our tribe
            </h2>
            <p className="projectDesc colorBlack fw-800">
              To celebrate <span className="colorRed">design!</span>
            </p>
            <span className="colorBlack fw-400">
              We’re always on the lookout for talent. <br /> Come say hello and
              we’ll figure out if <br /> you’re a good fit!
            </span>
          </div>
        </div>
      </section>

      <section className="webServicePageClient ourRecentClients">
        <div className="content_container">
          <h2 className="sectionHead colorBlack fw-800 wow">
            <img src="/images/icons/line.svg" alt="line" />
            Our Recent Clients
          </h2>
          <ClientLogo client="commonClient" />
        </div>
      </section>

      <section className="weareintheNews">
        <div className="content_container">
          <News />
        </div>
      </section>
    </>
  );
};

export default AboutUs;
