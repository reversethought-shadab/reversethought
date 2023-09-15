import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import WOW from "wowjs";
import { useEffect } from "react";
import ClientLogo from "../../Shared/ClientLogo";
import News from "../../Shared/News";
import WhatWeHaveDone from "../../Shared/WhatWeHaveDone";
import Popup from "../../Shared/Popup";

const Services = (props) => {
  const [activeTab, setActiveTab] = useState(0);
  const [watchReel, setWatchReel] = useState(false);

  useEffect(() => {
    const wow = new WOW.WOW({
      live: false,
    });
    wow.init();
  }, []);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const watch_reel = () => {
    setWatchReel(true);
  };

  const close_reel = () => {
    setWatchReel(false);
  };

  return (
    <>
      {watchReel === true ? <Popup close_reel={close_reel} /> : ""}
      <section className="servicePageSection">
        <div className="content_container">
          <div className="servicePageBanner">
            <h1 className="colorWhite fw-800 projectHeading wow animate__animated animate__fadeInUp">
              Digital Solutions for <br /> Business Success
            </h1>
            <p className="colorWhite fw-400 projectDesc wow animate__animated animate__fadeInUp animation_delay_300ms">
              We provide innovative solutions to expand business a suite of
              tools for your business.
            </p>
            <p
              className="watch_reel_txt mb-0 mt-0 wow animate__animated animate__fadeInUp animation_delay_500ms"
              onClick={watch_reel}
              onMouseEnter={props.onMouseEnterSmall}
              onMouseLeave={props.onMouseLeaveSmall}
            >
              <img
                src="/images/icons/play-white.svg"
                alt="play"
                className="img-fluid hero_reel_play"
              />
              <span>Watch the Agency Reel!</span>
            </p>
            <br />
            <div className="position-relative text-center imgSpinAmimation wow animate__animated animate__fadeIn animation_delay_800ms">
              <div className="">
                <img
                  src="/images/service.png"
                  alt="service"
                  className="img-fluid rotateAnimation"
                />
              </div>
              <a href="#whatWeDo" className="tapToSee colorWhite fw-300">
                Tap to see what we do <br />
                <Icon icon="icon-park-outline:double-down" color="white" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="whatWeDo" id="whatWeDo">
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

      <section className="webServicePageClient ourRecentClients">
        <div className="content_container">
          <h2 className="sectionHead colorBlack fw-800 wow">
            <img src="/images/icons/line.svg" alt="line" />
            Our Recent Clients
          </h2>
          <ClientLogo client="digiMarketClient" />
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
            <p className="mb-0 wow">
              Partner with <br /> Reverse Thought
            </p>
            <p className="mb-0 wow"> for inspiring design solutions</p>
            <p className="mb-0 wow">
              A digital agency that will make you proud
            </p>
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

      <section className="servicePageMainNews weareintheNews">
        <div className="content_container">
          <News />
        </div>
      </section>
    </>
  );
};

export default Services;
